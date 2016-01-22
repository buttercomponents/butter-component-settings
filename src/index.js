import React, { Component } from 'react';

//import i18n from './language';

import moment from 'moment';

import Stars from './Stars';
import CloseButton from './CloseButton';
import ShowInfo from 'butter-component-show-info';

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

let ShowHeader = (props) => (
    <div className={style['header']}>
        <div data-bgr={ props.images.fanart } className={style['tv-poster-background']}><div className={style['tv-poster-overlay']}></div></div>
        <div className={style['header-image']}>
            <div data-bgr={ props.images.poster } className={style['tv-cover']}></div>
        </div>
        <HeaderInfo {...props}/>
    </div>
);

let ShowDetail = (props) => (
    <div style={{backgroundColor: 'black'}}>
        <div className={style['container']}>
            <CloseButton />
            <ShowHeader {...props}/>
            <ShowInfo {...props}/>
        </div>
    </div>
)

export default ShowDetail;
