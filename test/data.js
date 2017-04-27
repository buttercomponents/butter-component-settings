var ActionTypes = require('butter-component-action-types')

function arrayToi18nHash(a) {
    return a.reduce((a, c) => {
        a[c] = c;
        return a;
    }, {});
}

var i18n = {
    __: (a) => (a)
}

export default {
    "action": {
        goBack: console.log.bind(console, "GO BACK pressed")
    },
    "tabs": [{
        title: "General",
        id: "general",
        items: [{
            id: "activateTorrentCollection",
            icon: "collections_bookmark",
            title: "Torrent Collection",
            helper: "Display a view with your Torrent Collection",
            action: {
                type: ActionTypes.SWITCH
            }
        }, {
            id: "activateWatchlist",
            icon: "remove_red_eye",
            title: "Watchlist",
            helper: "Display a view with your Watchlist",
            action: {
                type: ActionTypes.SWITCH
            }
        }, {
            id: "activateRandomize",
            icon: "shuffle",
            title: "Randomize Button",
            helper: "Display a button to select a Random Movie in the Current View",
            advanced: true,
            action: {
                type: ActionTypes.SWITCH
            }
        }, {
            id: "movies_quality",
            icon: "sort",
            title: "Content Quality",
            helper: "Only show content in this quality",
            advanced: true,
            action: {
                type: ActionTypes.DROPDOWN,
                options: arrayToi18nHash(["all", "1080p", "720p"])
            }
        }, {
            id: "moviesShowQuality",
            icon: "high_quality",
            title: "Show Quality",
            helper: "Display Content Quality in List view",
            advanced: true,
            action: {
                type: ActionTypes.SWITCH
            }
        }, {
            id: "alwaysFullscreen",
            icon: "fullscreen",
            title: "Fullscreen",
            helper: "Always start playback in FullScreen mode",
            advanced: true,
            action: {
                type: ActionTypes.SWITCH
            }
        }, {
            id: "playNextEpisodeAuto",
            icon: "queue_play_next",
            title: "Play Next",
            helper: "Automatically play next Episode",
            advanced: true,
            action: {
                type: ActionTypes.SWITCH
            }
        }, {
            id: "connectionLimit",
            icon: "settings_applications",
            title: "Connection Limit",
            helper: "Limit the amount of Outbound Connection Butter will open",
            advanced: true,
            action: {
                type: ActionTypes.TEXT
            }
        }, {
            id: "streamPort",
            icon: "settings_applications",
            title: "Stream Port",
            helper: "Port to stream on, randomlly choosen if 0",
            advanced: true,
            action: {
                type: ActionTypes.TEXT
            }
        }, {
            id: "overallRatio",
            icon: "settings_applications",
            title: "Overall Ratio",
            helper: "Downloaded so far:",
            advanced: true,
            action: {
                type: ActionTypes.TEXT
            }
        }, {
            id: "cache-directory",
            icon: "folder",
            title: "Cache Directory",
            helper: "Open the Directory where Butter keeps it's Cache",
            advanced: true,
            action: {
                type: ActionTypes.BUTTON,
                title: "Open"
            }
        }, {
            id: "deleteTmpOnClose",
            icon: "delete",
            title: "Clear Cache",
            helper: "Delete temp folder after closing the App",
            advanced: true,
            action: {
                type: ActionTypes.SWITCH
            }
        }]
    }, {
        title: "Interface",
        id: "interface",
        items: [{
            icon: "collections_bookmark",
            title: "Torrent Collection",
            helper: "Display a view with your Torrent Collection",
            action: {
                type: ActionTypes.SWITCH
            }
        }, {
            icon: "folder",
            title: "Cache Directory",
            helper: "Open the Directory where Butter keep it's cache",
            action: {
                type: ActionTypes.BUTTON,
                title: "Open"
            }
        }, {
            icon: "format_paint",
            title: "Theme",
            helper: "Select a different Look&Feel for the App",
            action: {
                type: ActionTypes.DROPDOWN,
                options: arrayToi18nHash(["dark", "pink"]),
                apply: (theme) =>
                    (document.getElementById('root').className = `theme-${theme}`)
            }
        }, {
            icon: "location_on",
            title: "IP Adress",
            helper: "Set this machine's IP Adress",
            action: {
                type: ActionTypes.TEXT
            }
        }]
    }, {
        title: "Test",
        id: "Test",
        sections: [{
            id: "dropdowns_test",
            title: "Dropdowns",
            advanced: false,
            items: [{
                id: "color_test",
                icon: "color_lens",
                title: "Color",
                helper: "Color component test",
                action: {
                    type: ActionTypes.COLOR,
                    options: arrayToi18nHash(["#FFFFFF", "#f1c40f", "#e74c3c", "#2ecc71", "#9b59b6", "#3498db"])
                }
            },
            {
                id: "dropdown_test",
                icon: "arrow_drop_down",
                title: "Dropdown",
                helper: "Dropdown component test",
                action: {
                    type: ActionTypes.DROPDOWN,
                    options: arrayToi18nHash(["item 1", "item 2", "item 3", "item 4", "item 5", "item 6",  "item 7", "item 8", "item 9", "item 10"])
                }
            }]

            }]
    }, {
        id: 'extensions',
        title: i18n.__('Extensions'),
        sections: [{
            id: 'remote-control',
            title: i18n.__('Remote Control'),
            advanced: true,
            items: [{
                id: 'settingsIpAddress',
                title: i18n.__('IP Address'),
                helper: i18n.__('Set this machine\'s IP Address'),
                icon: 'location_on',
                action: {
                    type: ActionTypes.TEXT,
                }
            }, {
                id: 'httpApiPort',
                title: i18n.__('%s Port', 'HTTP API'),
                helper: i18n.__('Port to use for %s', 'HTTP API'),
                icon: 'http',
                action: {
                    type: ActionTypes.NUMBER,
                }
            }, {
                id: 'httpApiUsername',
                title: i18n.__('%s Username', 'HTTP API'),
                helper: i18n.__('Username To use for %s', 'HTTP API'),
                icon: 'account_box',
                action: {
                    type: ActionTypes.TEXT,
                }
            }, {
                id: 'httpApiUsername',
                title: i18n.__('%s Username', 'HTTP API'),
                helper: i18n.__('Username To use for %s', 'HTTP API'),
                icon: 'account_box',
                action: {
                    type: ActionTypes.PASSWORD,
                }
            }, {
                id: 'qrCodeGen',
                title: i18n.__('QR Code'),
                helper: i18n.__('Generate Pairing QR Code'),
                icon: 'lock',
                action: {
                    type: ActionTypes.BUTTON,
                    title: i18n.__('Get Code')
                }
            }]
        }, {
            id: 'trakt-connected',
            title: 'Trakt.tv',
            showIf: (() => (App.Trakt.authenticated)),
            items: [{
                id: 'trakt-connected',
                title: i18n.__('You are currently connected to %s', 'Trakt.tv'),
                helper: i18n.__('%s connection state', 'Trakt.tv'),
                icon: 'verified_user',
                action: {
                    type: ActionTypes.BUTTON,
                    title: 'Disconnect Account'
                }
            }, {
                id: 'traktSyncOnStart',
                title: i18n.__('Sync on Start'),
                helper: i18n.__('Automatically sync %s on App Start', 'Trakt.tv'),
                icon: 'settings_applications',
                action: {
                    type: ActionTypes.SWITCH
                },
            }, {
                id: 'traktPlayback',
                title: i18n.__('Resume Playback'),
                helper: i18n.__('Restart your %s tracked media from where you left them', 'Trakt.tv'),
                icon: 'settings_applications',
                action: {
                    type: ActionTypes.SWITCH
                },
            }, {
                id: 'traktSync',
                title: i18n.__('Sync with %s', 'Trakt.tv'),
                helper: i18n.__('%s sync master switch', 'Trakt.tv'),
                icon: 'sync',
                action: {
                    type: ActionTypes.SWITCH
                },
            }]
        }, {
            id: 'trakt-not-connected',
            title: 'Trakt.tv',
            showIf: (() => (! App.Trakt.authenticated)),
            items: [{
                id: 'traktConnectTo',
                title: i18n.__('Connect to %s', 'Trakt.tv'),
                helper: i18n.__('Use OAuth to authenticate'),
                icon: 'insert_link',
                action: {
                    type: ActionTypes.BUTTON,
                    title: 'Connect'
                }
            }]
        }, {
            id: 'tvshowtime-connected',
            title: 'TVShow Time',
            showIf: (() => (App.TVShowTime.authenticated)),
            items: [{
                id: 'tvshowtime-connected',
                title: i18n.__('You are currently connected to %s', 'TVShow Time'),
                helper: i18n.__('%s connection state', 'TVShow Time'),
                icon: 'verified_user',
                action: {
                    type: ActionTypes.BUTTON,
                    title: 'Disconnect Account'
                }
            }]
        }, {
            id: 'tvshowtime-not-connected',
            title: 'TVShow Time',
            showIf: (() => (! App.TVShowTime.authenticated)),
            items: [{
                id: 'tvshowtime-connect',
                title: i18n.__('Connect to %s', 'TVShow Time'),
                helper: i18n.__('Use OAuth to authenticate'),
                icon: 'insert_link',
                action: {
                    type: ActionTypes.BUTTON,
                    title: 'Connect'
                }
            }]
        }, {
            id: 'opensubtitles-connected',
            title: 'Open Subtitles',
            showIf: (() => (Settings.opensubtitlesAuthenticated)),
            items: [{
                id: 'opensubtitles-connected',
                title: i18n.__('You are currently connected to %s', 'OpenSubtitles'),
                helper: i18n.__('%s connection state', 'OpenSubtitles'),
                icon: 'verified_user',
                action: {
                    type: ActionTypes.BUTTON,
                    title: 'Disconnect Account'
                }
            }, {
                id: 'opensubtitlesAutoUpload',
                title: i18n.__('Subtitle Upload'),
                helper: i18n.__('Automatically upload user-selected subtitles to %s', 'OpenSubtitles'),
                icon: 'verified_user',
                action: {
                    type: ActionTypes.BUTTON,
                    title: 'Disconnect Account'
                }
            }]
        }, {
            id: 'opensubtitles-not-connected',
            title: 'TVShow Time',
            showIf: (() => (! Settings.opensubtitlesAuthenticated)),
            items: [{
                id: 'opensubtitles-username',
                title: i18n.__('%s Username', 'OpenSubtitles'),
                helper: i18n.__('Username you use to connect to %s', 'OpenSubtitles'),
                icon: 'account_box',
                action: {
                    type: ActionTypes.TEXT,
                }
            }, {
                id: 'opensubtitles-password',
                title: i18n.__('%s Password', 'OpenSubtitles'),
                helper: i18n.__('Password you use to connect to %s', 'OpenSubtitles'),
                icon: 'lock',
                action: {
                    type: ActionTypes.PASSWORD,
                }
            }, {
                id: 'opensubtitles-connect',
                title: i18n.__('Connect to %s', 'OpenSubtitles'),
                helper: i18n.__('%s stores an encrypted hash of your password in your local database', 'Butter'),
                icon: 'link',
                action: {
                    type: ActionTypes.BUTTON,
                    title: 'Connect'
                }
            }]
        }]
    }, {
        title: "Providers",
        id: "providers",
        items: []
    }],
    settings: new Object({
        set: function () {console.log(arguments)},
        get: function () {return this[arguments[0]]},
        "projectName": "Butter",
        "projectUrl": "http://butterproject.org",
        "projectTwitter": "butterproject",
        "projectFacebook": "ButterProjectOrg",
        "projectGooglePlus": "ButterProject",
        "projectBlog": "http://blog.butterproject.org/",
        "projectForum": "https://www.reddit.com/r/ButterProject",
        "statusUrl": "https://status.butterproject.org",
        "changelogUrl": "https://github.com/butterproject/butter-desktop/commits/master",
        "issuesUrl": "https://github.com/butterproject/butter-desktop/issues",
        "sourceUrl": "https://github.com/butterproject/butter-desktop/",
        "commitUrl": "https://github.com/butterproject/butter-desktop/commit",
        "updateKey": "-----BEGIN PUBLIC KEY-----\nMIIBtjCCASsGByqGSM44BAEwggEeAoGBAPNM5SX+yR8MJNrX9uCQIiy0t3IsyNHs\nHWA180wDDd3S+DzQgIzDXBqlYVmcovclX+1wafshVDw3xFTJGuKuva7JS3yKnjds\nNXbvM9CrJ2Jngfd0yQPmSh41qmJXHHSwZfPZBxQnspKjbcC5qypM5DqX9oDSJm2l\nfM/weiUGnIf7AhUAgokTdF7G0USfpkUUOaBOmzx2RRkCgYAyy5WJDESLoU8vHbQc\nrAMnPZrImUwjFD6Pa3CxhkZrulsAOUb/gmc7B0K9I6p+UlJoAvVPXOBMVG/MYeBJ\n19/BH5UNeI1sGT5/Kg2k2rHVpuqzcvlS/qctIENgCNMo49l3LrkHbJPXKJ6bf+T2\n8lFWRP2kVlrx/cHdqSi6aHoGTAOBhAACgYBTNeXBHbWDOxzSJcD6q4UDGTnHaHHP\nJgeCrPkH6GBa9azUsZ+3MA98b46yhWO2QuRwmFQwPiME+Brim3tHlSuXbL1e5qKf\nGOm3OxA3zKXG4cjy6TyEKajYlT45Q+tgt1L1HuGAJjWFRSA0PP9ctC6nH+2N3HmW\nRTcms0CPio56gg==\n-----END PUBLIC KEY-----\n",
    "opensubtitles": {
      "useragent": "Butter"
    },
    "trakttv": {
      "client_id": "647c69e4ed1ad13393bf6edd9d8f9fb6fe9faf405b44320a6b71ab960b4540a2",
      "client_secret": "f55b0a53c63af683588b47f6de94226b7572a6f83f40bd44c58a7c83fe1f2cb1"
    },
    "tvshowtime": {
      "client_id": "iM2Vxlwr93imH7nwrTEZ",
      "client_secret": "ghmK6ueMJjQLHBwsaao1tw3HUF7JVp_GQTwDwhCn"
    },
    "fanart": {
      "api_key": "8104b601679c3ec23e7d3e4d93ddb46f"
    },
    "tvdb": {
      "api_key": "9845B685B799009C"
    },
    "tmdb": {
      "api_key": "1a83b1ecd56e3ac0e509b553b68c77a9"
    },
    "tabs": {
      "movie": {
        "order": 1,
        "name": "Movies",
        "providers": [
          "vodo",
          "archive"
        ]
      },
      "tvshow": {
        "order": 2,
        "name": "Series",
        "providers": [
          "youtube?channel=kurzgesagt",
          "youtube?channel=devinsupertramp",
          "youtube?channel=TEDtalksDirector",
          "youtube?channel=BadLipReading",
          "youtube?channel=1veritasium",
          "youtube?channel=enyay",
          "youtube?channel=CinemaSins",
          "youtube?channel=TomSka",
          "youtube?channel=ExplosmEntertainment",
          "youtube?channel=everyframeapainting",
          "youtube?channel=willunicycleforfood",
          "ccc?langs=[\"eng\"]&formats=[\"video/mp4\",\"video/webm\"]&urlList=[\"http://localhost:8080/\"]"
        ]
      },
      "test": {
        "name": "Test",
        "providers": [
          "ccc",
          "vodo"
        ]
      }
    },
    "providers": {
      "subtitle": "OpenSubtitles",
      "metadata": "Trakttv",
      "tvst": "TVShowTime",
      "torrentCache": "TorrentCache"
    },
    "trackers": {
      "blacklisted": [
        "demonii"
      ],
      "forced": [
        "udp://tracker.coppersurfer.tk:6969/announce",
        "udp://glotorrents.pw:6969/announce",
        "udp://exodus.desync.com:6969/announce",
        "udp://tracker.opentrackr.org:1337/announce",
        "udp://9.rarbg.com:2710/announce",
        "udp://tracker.openbittorrent.com:80",
        "udp://tracker.publicbt.com:80/announce"
      ]
    },
    "language": "en",
    "translateSynopsis": true,
    "coversShowRating": true,
    "watchedCovers": "fade",
    "showAdvancedSettings": false,
    "postersMinWidth": 134,
    "postersMaxWidth": 294,
    "postersMinFontSize": 0.8,
    "postersMaxFontSize": 1.3,
    "postersSizeRatio": 1.462686567164179,
    "postersWidth": 134,
    "postersJump": [
      134,
      154,
      174,
      194,
      214,
      234,
      254,
      274,
      294
    ],
    "alwaysFullscreen": false,
    "playNextEpisodeAuto": true,
    "chosenPlayer": "local",
    "alwaysOnTop": false,
    "theme": "Official_-_Experimental_theme.css",
    "ratingStars": true,
    "hideSeasons": true,
    "startScreen": "movie",
    "lastTab": "",
    "rememberFilters": false,
    "shows_default_quality": "720p",
    "movies_default_quality": "720p",
    "moviesShowQuality": false,
    "movies_quality": "all",
    "subtitle_language": "none",
    "subtitle_size": "28px",
    "subtitle_color": "#ffffff",
    "subtitle_decoration": "Outline",
    "subtitle_font": "Arial",
    "httpApiPort": 8008,
    "httpApiUsername": "butter",
    "httpApiPassword": "butter",
    "traktStatus": false,
    "traktLastSync": false,
    "traktLastActivities": false,
    "traktSyncOnStart": true,
    "traktPlayback": true,
    "tvstAccessToken": "",
    "opensubtitlesAutoUpload": true,
    "opensubtitlesAuthenticated": false,
    "opensubtitlesUsername": "xaiki",
    "opensubtitlesPassword": "caca",
    "connectionLimit": 55,
    "streamPort": 0,
    "tmpLocation": "/tmp/Butter",
    "databaseLocation": "/home/xaiki/.config/Butter/Default/data",
    "deleteTmpOnClose": true,
    "automaticUpdating": true,
    "events": true,
    "minimizeToTray": false,
    "bigPicture": false,
    "activateTorrentCollection": false,
    "activateWatchlist": true,
    "activateRandomize": true,
    "onlineSearchEngine": "KAT",
    "totalDownloaded": 15859712,
    "totalUploaded": 0,
    "updateEndpoint": {
      "url": "https://butterproject.org/",
      "index": 0,
      "proxies": [
        {
          "url": "https://butterproject.org/",
          "fingerprint": ""
        },
        {
          "url": "https://butterproject.github.io/",
          "fingerprint": ""
        }
      ]
    },
    "version": "0.3.8-5a",
    "dbversion": "0.1.0",
    "font": "tahoma",
    "defaultWidth": 1280,
    "defaultHeight": 720,
    "playerSubPosition": "0px",
    "playerVolume": "1.0",
    "tv_detail_jump_to": "firstUnwatched",
    "opensubtitles-username": "testo",
    "showAdvancedsettings": true,
    "lastWatchedTitle": "L5",
    "arch": "x64",
    "releaseName": "There's nothing on TV",
    "os": "linux",
    "opensubtitles-password": "blah",
    "lastWatchedTime": -3.167977,
    "disclaimerAccepted": 1
  })
}
