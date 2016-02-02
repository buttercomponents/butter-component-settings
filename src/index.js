import React, { Component } from 'react';

//import i18n from './language';

import Stars from 'butter-component-stars';

import style from './styl/theme.styl';

class Rating extends Component {
    constructor() {
        super();

        this.state = {
            stars: true
        }
    }

    toggleStars = () => {
        this.setState ({
            stars: !!!this.state.stars
        })
    };

    render() {
        let props = this.props;
        return (
            <div className={style['shmi-rating']} onClick={this.toggleStars}>
                {this.state.stars?
                 <Stars percentage={Math.round(props.percentage) / 20} />
                 :<div className="number-container-tv hidden">{Math.round(props.percentage) / 10} <em>/10</em></div>
                }
            </div>
        )
    }
}

let HeaderInfos = (props) => (
    <div className={style['shm-infos']}>
        <div className={style['shmi-year']}>{props.year}</div>
        <span className={style['dot']}></span>
        <div className={style['shmi-runtime']}>{props.runtime} + 'min'</div>
        <span className={style['dot']}></span>
        <div className={style['shmi-status']}>{props.status?i18n.__(props.status) : i18n.__('N/A')}</div>
        <span className={style['dot']}></span>
        <div className={style['shmi-genre']}>{i18n.__(props.genres[0])}</div>
        <span className={style['dot']}></span>
        <div className={style['shmi-imdb']}  data-toggle="tooltip" data-placement="top" title={i18n.__('Open IMDb page')}></div>
        <span className={style['dot']}></span>
        <Rating {...props.rating}/>
    </div>
)

let HeaderActions= (props) => (
    <div className={style['sh-actions']}>
        <div className={style['sha-bookmark']}>{i18n.__('Add to bookmarks') }</div>
        <div className={style['sha-watched']}>{i18n.__('Mark as Seen') }</div>
    </div>
)

let HeaderMetadata = (props) => (
    <div className={style['sh-metadata']}>
        <div className={style['shm-title']}>{props.title}</div>
        <HeaderInfos {...props}/>
        <div className={style['shm-synopsis']}>{props.synopsis}</div>
    </div>
);

class LoadImage extends React.Component {
    static defaultProps = {
        fallbackSrc: './images/posterholder.png',
        transition: 'opacity .3s ease-in',
        opacity: 1
    };

    state = {
        loaded: this.props.loaded || false,
        error:  this.props.error  || false
    };

    render() {
        let props = this.props;
        let loaded = this.state.loaded || this.state.error;
        let backgroundImage =  `url(${this.props.src})`;

        let style = Object.assign(props.style || {}, {
            backgroundImage: backgroundImage
        });

        if (this.state.error) {
            let fallback = require (this.props.fallbackSrc);
            Object.assign(style, {
                backgroundImage: `url(${fallback})`
            })
        }

        loaded && Object.assign(style, {
            transition: props.transition,
            opacity: props.opacity
        });

        return (
            <div {...props} style={style}>
                <img style={{display: 'none'}} src={props.src}
                     onError={e => this.setState({error: true})}
                     onLoad={e => this.setState({loaded: true})}/>
                {props.children}
            </div>
        )
    }
}

let BackgroundCover = (props)=> (
    <div className={style['sh-background']}>
        <LoadImage className={style['shc-img']}
                   src={props.fanart}
                   fallbackSrc='./images/bg-header.jpg'/>
        {props.children}
    </div>
);

let ShowPoster = (props)=> (
    <div className={style['sh-poster']}>
        <LoadImage className={style['shp-img']}
                   src={props.poster}
                   fallbackSrc='./images/posterholder.png'/>
    </div>
);

let HeaderInfo = (props) => (
    <div className={style['sh-info']}>
        <HeaderMetadata {...props}/>
        <HeaderActions />
    </div>
)

let ShowHeader = (props) => (
    <section className={style['show-header']}>
        <BackgroundCover {...props.images}>
            <ShowPoster {...props.images}/>
            <HeaderInfo {...props}/>
        </BackgroundCover>
    </section>
);

export default ShowHeader;
