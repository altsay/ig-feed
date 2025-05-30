<div class="sbi-fb-full-wrapper sbi-fb-fs">
    <div class="sbi-sb-container">
        <?php
        /**
         * SBI Admin Notices
         * 
         * @since 4.0
         */
        do_action('sbi_admin_notices');
        ?>
        <div class="sbi-section-header">
            <h2>{{genericText.title}}</h2>
        </div>

        <div class="sbi-about-box">
            <div class="sb-team-avatar">
                <img :src="aboutBox.teamAvatar" :alt="aboutBox.teamImgAlt">
            </div>
            <div class="sb-team-info">
                <div class="sb-team-left">
                    <h2>{{aboutBox.atSmashBalloon}}</h2>
                </div>
                <div class="sb-team-right">
                    <p>{{aboutBox.weAreOn}}</p>
                    <p>{{aboutBox.ourPlugins}}</p>
                </div>
            </div>
        </div>

        <div class="sbi-section-second-header">
            <h3>{{genericText.title2}}</h3>
            <p v-html="genericText.description2" />
        </div>

        <div class="sbi-plugins-boxes-container sbi-feed-plugins">
            <div class="sb-plugins-box" v-for="(plugin, name, index) in plugins">
                <div class="icon"><img :src="plugin.icon" :alt="plugin.title"></div>
                <div class="plugin-box-content">
                    <h4 class="sb-box-title">{{plugin.title}}</h4>
                    <p class="sb-box-description">{{plugin.description}}</p>
                    <div class="sb-action-buttons">
                        <button class="sbi-btn sb-btn-add" v-if="!plugin.installed" @click="installPlugin(plugin.download_plugin, name, index, 'plugin')">
                            <span v-html="buttonIcon()" v-if="btnClicked == index + 1 && btnName == name"></span>
                            <span v-html="icons.installIcon" v-if="!btnClicked || btnName != name"></span>
                            {{buttons.install}}
                        </button>
                        <button class="sbi-btn sb-btn-installed" v-if="plugin.installed">
                            <span v-html="icons.checkmarkSVG"></span>
                            {{buttons.installed}}
                        </button>
                    </div>
                </div>
            </div>

            <div class="sb-plugins-box sbi-social-wall-plugin-box" v-for="(plugin, name, index) in proPlugins">
                <div class="icon">
                    <img :src="plugin.icon" :alt="plugin.title">
                </div>
                <div class="plugin-box-content">
                    <h4 class="sb-box-title">{{plugin.title}}</h4>
                    <p class="sb-box-description">{{plugin.description}}</p>
                    <div class="sb-action-buttons">
                        <a class="sbi-btn sb-btn-add" v-if="!plugin.installed" :href="plugin.permalink" target="_blank">
                            {{buttons.viewDemo}}
                            <span v-html="icons.link"></span>
                        </a>
                        <button class="sbi-btn sb-btn-installed" v-if="plugin.installed">
                            <span v-html="icons.checkmarkSVG"></span>
                            {{buttons.installed}}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="sbi-section-second-header">
            <h3>{{genericText.title3}}</h3>
        </div>

        <div class="sbi-plugins-boxes-container sb-recommended-plugins">
            <div class="sb-plugins-box" v-for="(plugin, name, index) in recommendedPlugins">
                <div class="icon"><img :src="plugin.icon" :alt="plugin.title"></div>
                <div class="plugin-box-content">
                    <h4 class="sb-box-title">{{plugin.title}}</h4>
                    <p class="sb-box-description">{{plugin.description}}</p>
                    <div class="sb-action-buttons">
                        <button class="sbi-btn sb-btn-add" v-if="!plugin.installed" @click="installPlugin(plugin.download_plugin, name, index, 'recommended_plugin')">
                            <span v-html="buttonIcon()" v-if="btnClicked == index + 1 && btnName == name"></span>
                            <span v-html="icons.installIcon" v-if="!btnClicked || btnName != name"></span>
                            {{buttons.install}}
                        </button>
                        <button class="sbi-btn sb-btn-installed" v-if="plugin.installed">
                            <span v-html="icons.checkmarkSVG"></span>
                            {{buttons.installed}}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>