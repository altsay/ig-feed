<?php

namespace InstagramFeed\Integrations;

use InstagramFeed\Builder\SBI_Db;
use InstagramFeed\SB_Instagram_Data_Encryption;

class FeedAnalytics
{
	/**
	 * The slug of the current plugin.
	 *
	 * @var string
	 */
	private static $current_plugin = 'instagram';

	/**
	 * Load the necessary filters for analytics.
	 *
	 * @return void
	 */
	public function loadFilters()
	{
		add_filter('sb_analytics_filter_top_posts', [$this, 'filterTopPosts'], 10, 3);
		add_filter('sb_analytics_filter_profile_details', [$this, 'filterProfileDetails'], 10, 3);
		add_filter('sb_analytics_filter_feed_list', [$this, 'filterFeedList'], 10, 2);
	}

	/**
	 * Filters the top posts based on the provided post IDs and plugin slug.
	 *
	 * @param array  $posts The original posts array.
	 * @param array  $post_ids The array of post IDs to filter.
	 * @param string $plugin_slug The slug of the plugin to filter posts for.
	 * @return array The filtered array of top posts.
	 */
	public function filterTopPosts($posts, $post_ids, $plugin_slug)
	{
		if ($plugin_slug !== self::$current_plugin) {
			return $posts;
		}

		$post_ids = esc_sql($post_ids);
		$posts_data = SBI_Db::get_posts_by_ids($post_ids);

		$encryption = new SB_Instagram_Data_Encryption();
		$results = [];

		foreach ($posts_data as $post) {
			$data = json_decode($encryption->maybe_decrypt($post['json_data']), true);

			if (empty($data) || empty($data['id'])) {
				continue;
			}

			$results[] = [
				'plugin' => [
					'slug' => self::$current_plugin,
				],
				'feed_post_id' => $data['id'],
				'text' => !empty($data['caption']) ? $data['caption'] : '',
				'imageSrc' => !empty($data['media_url']) ? $data['media_url'] : '',
				'updated_time_ago' => !empty($data['timestamp']) ? $data['timestamp'] : '',
				'profile' => [
					'label' => $data['username'],
					'url' => $data['permalink'],
					'id' => $data['username'],
				],
			];
		}

		return $results;
	}

	/**
	 * Filter the profile details based on the provided profile information.
	 *
	 * @param array      $profile_details The original profile details.
	 * @param int|string $feed_id The ID of the feed.
	 * @param string     $plugin_slug The slug of the current plugin.
	 * @return array The filtered profile details.
	 */
	public function filterProfileDetails($profile_details, $feed_id, $plugin_slug)
	{
		if ($plugin_slug !== self::$current_plugin) {
			return $profile_details;
		}

		$feed = SBI_Db::feeds_query(['id' => (int) $feed_id]);
		$settings = !empty($feed[0]['settings']) ? json_decode($feed[0]['settings'], true) : [];

		if (!empty($settings['id'])) {
			$source_id = is_array($settings['id']) ? $settings['id'][0] : $settings['id'];
			$source = SBI_Db::source_query(['id' => $source_id]);

			if (!empty($source[0]['info'])) {
				$encryption  = new SB_Instagram_Data_Encryption();
				$info = json_decode($encryption->maybe_decrypt($source[0]['info']), true);
				$cdn_avatar_url = \SB_Instagram_Parse::get_avatar_url($info);

				$profile_details = [
					'id'         => stripslashes($info['username']),
					'pluginSlug' => self::$current_plugin,
					'profile' => [
						'label' => stripslashes($info['username']),
						'imageSrc' => $cdn_avatar_url
					]
				];
			}
		}

		return $profile_details;
	}

	/**
	 * Filter the feed list based on the provided plugin slug.
	 *
	 * @param array  $feeds The original feeds array.
	 * @param string $plugin_slug The slug of the current plugin.
	 * @return array The filtered feeds array.
	 */
	public function filterFeedList($feeds, $plugin_slug)
	{
		if ($plugin_slug !== self::$current_plugin) {
			return $feeds;
		}

		$all_feeds = SBI_Db::feeds_query();
		$results = [];

		foreach ($all_feeds as $feed) {
			$results[] = [
				'value' => [
					'feed_id' => $feed['id'],
				],
				'label' => $feed['feed_name'],
			];
		}

		return $results;
	}
}
