<div v-if="selected === 'app-1'">
	<div class="sb-tab-box sbi-uo-install-notice clearfix" v-if="!clickSocialActive && !clickSocialScreen.shouldHideClickSocialNotice && clickSocialScreen.isClickSocialSupported">
		<div class="sbi-tab-notice">
			<div class="sbi-notice-left">
				<span class="icon" v-html="generalTab.clickSocialInstallNotice.logo"></span>
				<div class="sbi-notice-text">
					<p>{{generalTab.clickSocialInstallNotice.notice}}</p>
				</div>
			</div>
			<div class="sbi-notice-right">
				<button class="sbi-btn sbi-notice-learn-more" @click.prevent.default="activateView('clickSocialIntegrationModal')">{{generalTab.clickSocialInstallNotice.learnMore}}</button>
				<button class="sbi-btn sbi-uo-notice-dismiss" v-html="generalTab.clickSocialInstallNotice.closeIcon" @click.prevent.default="dismissClickSocialNotice()"></button>
			</div>
		</div>
	</div>
	<div class="sb-tab-box sb-license-box clearfix">
		<div class="tab-label">
			<h3>{{generalTab.licenseBox.title}}</h3>
			<p>{{generalTab.licenseBox.description}}</p>
		</div>

		<div class="sbi-tab-form-field d-flex">
			<div v-if="licenseType === 'free'" class="sbi-tab-field-inner-wrap sbi-license" :class="['license-' + licenseStatus, 'license-type-' + licenseType, {'form-error': hasError}]">
				<div class="upgrade-info">
					<span v-html="generalTab.licenseBox.upgradeText1"></span>
					<span v-html="generalTab.licenseBox.upgradeText2"></span>
				</div>
				<span class="license-status" v-html="generalTab.licenseBox.freeText"></span>
				<div class="field-left-content">
					<div class="sb-form-field">
						<input type="password" name="license-key" id="license-key" class="sbi-form-field" :placeholder="generalTab.licenseBox.inactiveFieldPlaceholder">
					</div>
					<div class="form-info d-flex justify-between">

						<span class="manage-license">
							<a :href="links.manageLicense">{{generalTab.licenseBox.manageLicense}}</a>
						</span>
						<span>
							<span class="test-connection">
								{{generalTab.licenseBox.test}}
							</span>
							<span class="upgrade">
								<a :href="upgradeUrl" target="_blank">{{generalTab.licenseBox.upgrade}}</a>
							</span>
						</span>
					</div>
				</div>
				<div class="field-right-content">
					<button type="button" class="sbi-btn sb-btn-blue">{{generalTab.licenseBox.activate}}</button>
				</div>
			</div>

			<div v-if="licenseType === 'pro' && (
				licenseStatus === 'valid' ||
				licenseStatus === 'active' ||
				licenseStatus === 'activated')"
				class="sbi-tab-field-inner-wrap sbi-license" :class="['license-' + licenseStatus, 'license-type-' + licenseType, {'form-error': hasError}]">
				<span class="license-status" v-html="generalTab.licenseBox.activeText"></span>
				<div class="d-flex">
					<div class="field-left-content">
						<div class="sb-form-field">
							<input type="password" name="license-key" id="license-key" class="sbi-form-field" value="******************************" v-model="licenseKey">
							<span class="field-icon fa fa-check-circle"></span>
						</div>
						<div class="form-info d-flex justify-between">
							<span class="manage-license">
								<a :href="links.manageLicense" target="_blank">{{generalTab.licenseBox.manageLicense}}</a>
							</span>
							<span>
								<span class="test-connection" @click="testConnection()" v-if="testConnectionStatus === null">
									{{generalTab.licenseBox.test}}
									<span v-html="testConnectionIcon()" :class="testConnectionStatus">
									</span>
								</span>
								<span v-html="testConnectionIcon()" class="test-connection" :class="testConnectionStatus" v-if="testConnectionStatus !== null"></span>
								<span class="recheck-license-status" @click="recheckLicense('sbi')" v-html="recheckBtnText('sbi')" :class="recheckLicenseStatus"></span>

								<span class="upgrade">
									<a :href="upgradeUrl" target="_blank">{{generalTab.licenseBox.upgrade}}</a>
								</span>
							</span>
						</div>
					</div>
					<div class="field-right-content">
						<button type="button" class="sbi-btn" v-on:click="deactivateLicense" :class="{loading: loading}">
							<span v-if="loading && pressedBtnName === 'sbi'" v-html="loaderSVG"></span>
							{{generalTab.licenseBox.deactivate}}
						</button>
					</div>
				</div>
			</div>

			<div v-else
				class="sbi-tab-field-inner-wrap sbi-license"
				:class="['license-' + licenseStatus, 'license-type-' + licenseType, {'form-error': hasError}]">
				<span class="license-status" v-html="generalTab.licenseBox.inactiveText"></span>
				<div class="d-flex">
					<div class="field-left-content">
						<div class="sb-form-field">
							<input type="password" name="license-key" id="license-key" class="sbi-form-field" :placeholder="generalTab.licenseBox.inactiveFieldPlaceholder" v-model="licenseKey">
							<span class="field-icon field-icon-error fa fa-times-circle" v-if="licenseErrorMsg !== null"></span>
						</div>
						<div class="mb-6" v-if="licenseErrorMsg !== null">
							<span v-html="licenseErrorMsg" class="sbi-error-text"></span>
						</div>
						<div class="form-info d-flex justify-between">
							<span></span>
							<span>
								<span class="test-connection" @click="testConnection()" v-if="testConnectionStatus === null">
									{{generalTab.licenseBox.test}}
									<span v-html="testConnectionIcon()" :class="testConnectionStatus"></span>
								</span>
								<span v-html="testConnectionIcon()" class="test-connection" :class="testConnectionStatus" v-if="testConnectionStatus !== null"></span>
								<span class="recheck-license-status" @click="recheckLicense(licenseKey, pluginItemName, 'sbi')" v-html="recheckBtnText('sbi')" :class="recheckLicenseStatus"></span>

								<span class="upgrade">
									<a :href="upgradeUrl" target="_blank">{{generalTab.licenseBox.upgrade}}</a>
								</span>
							</span>
						</div>
					</div>
					<div class="field-right-content">
						<button type="button" class="sbi-btn sb-btn-blue" v-on:click="activateLicense">
							<span v-if="loading && pressedBtnName === 'sbi'" v-html="loaderSVG"></span>
							{{generalTab.licenseBox.activate}}
						</button>
					</div>
				</div>
			</div>

			<!-- Extension license -->
			<div class="sbi-tab-field-inner-wrap" v-for="extension in extensionsLicense" :class="[extension.name + '-license', 'license-' + extension.licenseStatus]">
				<span class="license-status" v-html="extension.statusText"></span>

				<!-- If extensions license is valid -->
				<div class="d-flex" v-if="extension.licenseStatus !== false && extension.licenseStatus == 'valid'">
					<div class="field-left-content">
						<div class="sb-form-field">
							<input type="password" class="sbi-form-field" value="show pass" v-model="extension.licenseKey">
							<span v-if="extension.licenseStatus == 'valid'" class="field-icon fa fa-check-circle"></span>
						</div>
						<div class="form-info d-flex justify-between">
							<span class="manage-license">
								<a :href="links.manageLicense" target="_blank">{{generalTab.licenseBox.manageLicense}}</a>
							</span>
							<span>
								<span class="recheck-license-status" @click="recheckLicense(extension.licenseKey, extension.itemName, extension.name)" v-html="recheckBtnText(extension.name)" :class="recheckLicenseStatus"></span>

								<span class="upgrade">
									<a :href="extension.upgradeUrl" target="_blank">{{generalTab.licenseBox.upgrade}}</a>
								</span>
							</span>
						</div>
					</div>
					<div class="field-right-content">
						<button type="button" class="sbi-btn" v-on:click="deactivateExtensionLicense(extension)" :class="{loading: loading}">
							<span v-if="loading && pressedBtnName === extension.name" v-html="loaderSVG"></span>
							{{generalTab.licenseBox.deactivate}}
						</button>
					</div>
				</div>

				<!-- If extensions license is not valid -->
				<div class="d-flex" v-else>
					<div class="field-left-content">
						<div class="sb-form-field" :class="{'sb-field-error': extensionFieldHasError && pressedBtnName === extension.name}">
							<input type="password" class="sbi-form-field" :placeholder="generalTab.licenseBox.inactiveFieldPlaceholder" v-model="extensionsLicenseKey[extension.name]">
						</div>
						<div class="form-info d-flex justify-between">
							<span class="manage-license">
								<a :href="links.manageLicense" target="_blank">{{generalTab.licenseBox.manageLicense}}</a>
							</span>
							<span>
								<span class="recheck-license-status" v-if="extension.licenseKey" @click="recheckLicense(extension.licenseKey, extension.itemName, extension.name)" v-html="recheckBtnText(extension.name)" :class="recheckLicenseStatus"></span>

								<span class="upgrade">
									<a :href="extension.upgradeUrl" target="_blank">{{generalTab.licenseBox.upgrade}}</a>
								</span>
							</span>
						</div>
					</div>
					<div class="field-right-content">
						<button @click="activateExtensionLicense(extension)" type="button" class="sbi-btn sbi-btn-blue" :class="{loading: loading}">
							<span v-if="loading && pressedBtnName === extension.name" v-html="loaderSVG"></span>
							{{generalTab.licenseBox.activate}}
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="sb-propro-box clearfix" v-if="isLicenseUpgraded">
		<div class="sb-protopro-upgrade-ctn">
			<div class="sb-protopro-upgrade-text">
				<strong>
					<?php esc_html_e('Congratulations! You have upgraded to Instagram Feeds', 'instagram-feed') ?>
					<span class="sb-protopro-upgrade-type" v-if="licenseUpgradedInfoTierName !== null" v-html="licenseUpgradedInfoTierName"></span>
				</strong>
				<span><?php esc_html_e('Please update the plugin by clicking the button on the right for changes to take effect', 'instagram-feed') ?></span>
			</div>
			<button type="button" class="sbi-btn sb-btn-blue" v-on:click="upgradeProProLicense" v-if="isLicenseUpgraded && upgradeNewVersion === false">
				<svg v-if="!loading || pressedBtnName !== 'sbi-upgrade'" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12.6666 5.83332L9.99996 8.49999H12C12 9.56086 11.5785 10.5783 10.8284 11.3284C10.0782 12.0786 9.06082 12.5 7.99996 12.5C7.33329 12.5 6.68663 12.3333 6.13329 12.0333L5.15996 13.0067C6.00869 13.5468 6.99392 13.8336 7.99996 13.8333C9.41445 13.8333 10.771 13.2714 11.7712 12.2712C12.7714 11.271 13.3333 9.91448 13.3333 8.49999H15.3333L12.6666 5.83332ZM3.99996 8.49999C3.99996 7.43912 4.42139 6.42171 5.17153 5.67156C5.92168 4.92142 6.93909 4.49999 7.99996 4.49999C8.66663 4.49999 9.31329 4.66666 9.86663 4.96666L10.84 3.99332C9.99123 3.45316 9.006 3.16638 7.99996 3.16666C6.58547 3.16666 5.22892 3.72856 4.22872 4.72875C3.22853 5.72895 2.66663 7.0855 2.66663 8.49999H0.666626L3.33329 11.1667L5.99996 8.49999" fill="white" />
				</svg>
				<span v-if="loading && pressedBtnName === 'sbi-upgrade'" v-html="loaderSVG"></span>
				<?php esc_html_e('Update Plugin', 'instagram-feed') ?>
			</button>

		</div>
	</div>

	<div class="sb-tab-box sb-manage-sources-box clearfix">
		<div class="tab-label">
			<h3>{{generalTab.manageSource.title}}</h3>
		</div>
		<div class="sbi-tab-form-field">
			<div class="sb-form-field">
				<span class="help-text">
					{{generalTab.manageSource.description}}
				</span>
				<div class="sb-sources-list">
					<div class="sb-srcs-item sb-srcs-new" @click.prevent.default="activateView('sourcePopup','creationRedirect')">
						<span class="add-new-icon">
							<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M14.25 8H8.25V14H6.25V8H0.25V6H6.25V0H8.25V6H14.25V8Z" fill="#0068A0" />
							</svg>
						</span>
						<span>{{genericText.addSource}}</span>
					</div>
					<div class="sb-srcs-item" v-for="(source, sourceIndex) in sourcesList" :class="{expanded: expandedFeedID == sourceIndex + 1, 'sb-account-has-error' : source.error !== ''}">
						<div class="sbi-fb-srcs-item-ins">
							<div class="sb-srcs-item-avatar" v-if="returnAccountAvatar(source) != false">
								<img :key="sourceIndex" :src="returnAccountAvatar(source)" :alt="escapeHTML(source.username)">
							</div>
							<div :class="{'sb-srcs-item-inf-err-action-wrap' : source.error !== '', 'sb-srcs-item-inf-action-wrap' : source.error == ''}">
								<div class="sb-srcs-item-inf">
									<div class="sb-srcs-item-name">{{source.username}}</div>
									<div class="sb-srcs-item-used">
										<span v-html="printUsedInText(source.used_in)"></span>
										<div v-if="source.used_in > 0" class="sb-control-elem-tltpp">
											<div class="sb-control-elem-tltp-icon" v-html="svgIcons['info']" @click.prevent.default="viewSourceInstances(source)"></div>
										</div>
									</div>
								</div>
								<div class="sb-srcs-item-errors">
									<div v-if="source.error !== '' || source.error_encryption" class="sb-source-error-wrap">
										<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M6.50008 0.666664C3.28008 0.666664 0.666748 3.28 0.666748 6.5C0.666748 9.72 3.28008 12.3333 6.50008 12.3333C9.72008 12.3333 12.3334 9.72 12.3334 6.5C12.3334 3.28 9.72008 0.666664 6.50008 0.666664ZM7.08342 9.41667H5.91675V8.25H7.08342V9.41667ZM7.08342 7.08333H5.91675V3.58333H7.08342V7.08333Z" fill="#D72C2C" />
										</svg>

										<span v-html="source.error !== '' ? genericText.errorSource : genericText.errorEncryption"></span><a href="#" @click.prevent.default="activateView('sourcePopup', 'creationRedirect')" v-html="genericText.reconnect"></a>
									</div>

								</div>
								<div class="sb-srcs-item-actions">
									<div class="sb-srcs-item-actions-btn sb-srcs-item-delete" @click.prevent.default="openDialogBox('deleteSource', source)" v-html="svgIcons['delete']"></div>
									<div class="sb-srcs-item-actions-btn sb-srcs-item-cog" v-if="expandedFeedID != sourceIndex + 1" v-html="svgIcons['cog']" @click="displayFeedSettings(source, sourceIndex)"></div>
									<div class="sb-srcs-item-actions-btn sb-srcs-item-angle-up" v-if="expandedFeedID == sourceIndex + 1" v-html="svgIcons['angleUp']" @click="hideFeedSettings()"></div>
								</div>
							</div>
						</div>

						<div v-if="source.error == '' && source.account_type_info" class="sb-source-notification">
							<span v-html="svgIcons['exclamation']"></span>

							<div class="sbi-tooltip-info">
								<span v-if="source.account_type_info" v-html="genericText.accountTypeInfo"></span>
								<span class="sb-control-elm-tltp-content" v-if="source.account_type_info" v-html="genericText.accountTypeNotice"></span>
							</div>
							<a href="#" @click.prevent.default="activateView('sourcePopup', 'creationRedirect')" v-html="genericText.reconnect"></a>
						</div>

						<div class="sbi-fb-srcs-info sbi-fb-fs" v-if="expandedFeedID == sourceIndex + 1">
							<div class="sbi-fb-srcs-info-item">
								<strong>{{genericText.id}}</strong>
								<span>{{source.account_id}}</span>
								<div class="sbi-fb-srcs-info-icon" v-html="svgIcons['copy2']" @click.prevent.default="copyToClipBoard(source.account_id)"></div>
							</div>
						</div>

						<div class="sbi-fb-srcs-personal-btn" v-if="expandedFeedID == sourceIndex + 1 && source.account_type == 'basic'" @click.prevent.default="openPersonalAccount( source )">
							<div v-html="svgIcons['addRoundIcon']"></div>
							<span v-html="source?.header_data?.biography || source?.local_avatar_url ? genericText.updateAccountInfo : genericText.addAccountInfo"></span>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>


	<div class="sb-tab-box sb-preserve-settings-box clearfix">
		<div class="tab-label">
			<h3>{{generalTab.preserveBox.title}}</h3>
		</div>

		<div class="sbi-tab-form-field">
			<div class="sb-form-field">
				<label for="preserve-settings" class="sbi-checkbox">
					<input type="checkbox" name="preserve-settings" id="preserve-settings" v-model="model.general.preserveSettings">
					<span class="toggle-track">
						<div class="toggle-indicator"></div>
					</span>
				</label>
				<span class="help-text">
					{{generalTab.preserveBox.description}}
				</span>
			</div>
		</div>
	</div>

	<div class="sb-tab-box sb-import-box sb-reset-box-style clearfix">
		<div class="tab-label">
			<h3>{{generalTab.importBox.title}}</h3>
		</div>
		<div class="sbi-tab-form-field">
			<div class="sb-form-field">
				<div class="d-flex mb-15">
					<button type="button" class="sbi-btn sb-btn-lg import-btn" id="import-btn" @click="importFile" :disabled="uploadStatus !== null">
						<span class="icon" v-html="importBtnIcon()" :class="uploadStatus"></span>
						{{generalTab.importBox.button}}
					</button>
					<div class="input-hidden">
						<input id="import_file" type="file" value="import_file" ref="file" v-on:change="uploadFile">
					</div>
				</div>
				<span class="help-text">
					{{generalTab.importBox.description}}
				</span>
			</div>
		</div>
	</div>

	<div class="sb-tab-box sb-export-box clearfix">
		<div class="tab-label">
			<h3>{{generalTab.exportBox.title}}</h3>
		</div>
		<div class="sbi-tab-form-field">
			<div class="sb-form-field">
				<div class="d-flex mb-15">
					<select name="" id="sbi-feeds-list" class="sbi-select" v-model="exportFeed" ref="export_feed">
						<option value="none" selected disabled><?php esc_html_e('Select Feed', 'instagram-feed'); ?></option>
						<option v-for="feed in feeds" :value="feed.id">{{ feed.name }}</option>
					</select>
					<button type="button" class="sbi-btn sb-btn-lg export-btn" @click="exportFeedSettings" :disabled="exportFeed === 'none'">
						<span class="icon" v-html="exportSVG"></span>
						{{generalTab.exportBox.button}}
					</button>
				</div>
				<span class="help-text">
					{{generalTab.exportBox.description}}
				</span>
			</div>
		</div>
	</div>
</div>

<div class="sb-fs-boss sb-pro-newversion-popup-ctn" v-if="upgradeNewVersion === true && upgradeNewVersionUrl !== false">
	<div class="sb-pro-newversion-popup">
		<div class="sb-pro-newversion-popup-txt">
			<strong><?php esc_html_e('The plugin will be updated to a newer version', 'instagram-feed'); ?> <span style="color:blue">{{upgradeRemoteVersion}}</span></strong>
			<span><?php esc_html_e('You might want to backup your website before updating the plugin', 'instagram-feed'); ?></span>
		</div>
		<div class="sb-pro-newversion-popup-btns">
			<button type="button" class="sbi-btn sb-btn-gery" @click.prevent.default="cancelUpgrade()">
				<?php esc_html_e('Cancel', 'instagram-feed'); ?>
			</button>
			<button type="button" class="sbi-btn sb-btn-blue" @click.prevent.default="window.location.href = upgradeNewVersionUrl">
				<?php esc_html_e('Update Anyway', 'instagram-feed'); ?>
			</button>
		</div>
	</div>
</div>