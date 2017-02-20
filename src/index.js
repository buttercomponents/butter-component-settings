import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './styl/theme.styl';

import Row from './row';
import Switch from './switch';

let GoBackButton = (props) => (
    <div className={style['go-back']}>
        <i className={style['material-icons']}>arrow_back</i>
        <span>{props.t("Settings")}</span>
    </div>
)

let ActionBar = (props) => (
    <div id="action-bar">
        <div className={style['actions-bar']}>
            <GoBackButton {...props}/>
            <ul className={style['toolbar']}>
                <li>
                    <i data-toggle="tooltip" data-placement="left" title={props.t('Keyboard Shortcuts')} className={style['material-icons']}>keyboard</i>
                </li>
                <li>
                    <i data-toogle="tooltip" data-placement="left" title={props.t('Help Section')} className={style['material-icons magnet-link']}>help_outline</i>
                </li>
                <div className={style['toolbar-settings']}></div>
            </ul>
        </div>
    </div>
)

let SuccessAlert = (props) => (
    <div className={style['success_alert']} style={{display:'none'}}>
        {props.t('Saved')}
        <i className={style['material-icons']}>check</i>
    </div>
                               )

let CloseButton = (props) => (props)

let NavTabs = (props) => (
    <div className={style['navbar-s']}>
        <ul id="myTabs" className={style['nav', 'nav-tabs']} role="tablist">
            {props.tabs.map((t, i) => (
                 <li className={style['source', i===0?'active':'']} key={i}
                     href={t.id} aria-controls={t.id} role="tab" data-toggle="tab">
                     {props.t(t.title)}
                 </li>
             ))}
        </ul>
    </div>
)

class Settings extends Component {
    render() {
        let {state, props} = this;
        return (
            <div>
                <Row icon="collections_bookmark" title="Torrent Collection" helper="Display a view with your Torrent Collection" action={<Switch/>}/>
                <div className={[style['settings'], props.settings.showAdvancedsettings?'show-advanced':''].join(' ')}>

                    <div className={style['settings-container']}>
                        <SuccessAlert {...props}/>
                        <ActionBar {...props}/>
                        <NavTabs {...props}/>
                        <div className={style['tab-content-wrapper']}></div>
                        <div className={style['btns']}>
                            <div className={style['btn', 'flush-bookmarks', 'advanced']}>{props.t('Flush bookmarks database')}</div>
                            <div className={style['btn', 'flush-subtitles', 'advanced']}>{props.t('Flush subtitles cache')}</div>
                            <div className={style['btn', 'flush-databases']}>{props.t('Flush all databases')}</div>
                            <div className={style['btn', 'default-settings']}>{props.t('Reset to Default Settings')}</div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default translate(['settings'])(Settings);
