import React, { Component } from 'react';

//import i18n from './language';

import Stars from './Stars';
import ButterList from './List';
import CloseButton from './CloseButton';

import style from './styl/show_detail.styl';

class debug extends Component {
    render() {
        return (
            <h1>debug</h1>
        )
    }
}

let HeaderInfo = (props) => (<div className={style['header-info']}>
    <div className={style['tv-meta-data']}>
        <div className={style['tv-title']}>{props.title}</div>
        <div className={style['tv-year']}>{props.year}</div>
        <div className={style['tv-dot']}></div>
        <div className={style['tv-runtime']}>{props.runtime + 'min'}</div>
        <div className={style['tv-dot']}></div>

        <div className={style['tv-status']}>{props.status?i18n.__(props.status) : i18n.__('N/A')}</div>
        <div className={style['tv-dot']}></div>
        <div className={style['tv-genre']}>{i18n.__(props.genres[0])}</div>
        <div className={style['tv-dot']}></div>
        <div data-toggle="tooltip" data-placement="top" title={i18n.__('Open IMDb page')} className="show-imdb-link"></div>
        <div className={style['tv-dot']}></div>
        <div className={style['rating-container-tv']}>
            <Stars percentage={Math.round(props.rating.percentage) / 20} />
            <div className="number-container-tv hidden">{Math.round(props.rating.percentage) / 10} <em>/10</em></div>
        </div>
        <div className={style['tv-overview']}>{props.synopsis}</div>
        <div className="favourites-toggle">{i18n.__('Add to bookmarks')}</div>
        <div className="show-watched-toggle">{i18n.__('Mark as Seen')}</div>
    </div>
</div>);

let SeasonItem = (props) => (
    <li className={style['tab-season']} data-tab={'season-' + props.key}>
        <a>{i18n.__('Season %s', props.key)}</a>
    </li>
);

let EpisodeItem = (props) => (
    <li className={style['tab-episode']} data-id={props.tvdb_id}>
        <a href="#" className={style['episodeData']}>
            <span>{props.episode}</span>
            <div>{props.title}</div>
        </a>
        <i className="fa fa-eye watched {props.watched}"></i>
    </li>
);

let ShowList = (props) => (
    <div className={props.className || style[props.type]}>
        <debug {...props}/>
        <div className={style['display-base-title']}>
            <div className={style[`episode-list-${props.type}`]}>{props.name}</div>
        </div>
        <div className={style[`tabs-${props.type}`]}>
            <ButterList {...props} />
        </div>
    </div>
);

let SeasonList = (props) => (
    <ShowList {...props}
              type="seasons" name={i18n.__('Seasons')}
              items={props.torrents} itemComponent={SeasonItem}/>
);

let EpisodeList = (props) => (
    <ShowList {...props}
              type="episodes" name={i18n.__('Episodes')}
              items={props.torrents} itemComponent={EpisodeItem}/>
);

class ShowDetail extends Component {
    constructor(props) {
        super(props);

        let torrents = []
        props.episodes.map((value) => {
            if (!torrents[value.season]) torrents[value.season] = {};
            torrents[value.season][value.episode] = value;
        });

        this.state = {
            torrents: torrents
        }
    };

    render() {
        let props = this.props;
        return (
            <div style={{backgroundColor: 'black'}}>
                <div className={style['container']}>
                    <CloseButton />
                    <div className={style['header']}>
                        <div data-bgr={ props.images.fanart } className={style['tv-poster-background']}><div className={style['tv-poster-overlay']}></div></div>
                        <div className={style['header-image']}>
                            <div data-bgr={ props.images.poster } className={style['tv-cover']}></div>
                        </div>
                        <HeaderInfo {...props}/>
                    </div>
                    <div className={style.info}>
                        <SeasonList  className={style.seasons} torrents={this.state.torrents}/>
                        <div className={style.episodes}>
                            <EpisodeList className={style.episodesList}
                                         torrents={this.state.torrents}/>
                            <div className={style['right-container']}>
                                <div className={style['episode-info']}>
                                    <div className={style['episode-info']}>
                                        <div className={style['episode-info-title']}></div>
                                        <div className={style['episode-info-number']}></div>
                                        <div data-toggle="tooltip" data-placement="left"
                                             title={i18n.__('Health Unknown')} className="fa fa-circle health-icon None"></div>
                                        <div data-toggle="tooltip" data-placement="left" title={i18n.__('Magnet link')} className="fa fa-magnet show-magnet-link"></div>
                                        <div className={style['episode-info-date']}></div>
                                        <div className={style['episode-info-description']}></div>
                                    </div>
                                </div>
                                <div className={style['play-now']}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }};

export default ShowDetail
