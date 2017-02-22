import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './styl/theme.styl';

import Row from './components/row';
import Tabs from './components/tabs';
import Alert from './components/alert';
import Button from './components/button';
import Switch from './components/switch';

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

let CloseButton = (props) => (props)

class Settings extends Component {
    render() {
        let {state, props} = this;
        return (
            <div>
                <Row icon="collections_bookmark" title="Torrent Collection" helper="Display a view with your Torrent Collection" action={<Switch/>}/>
                <Row icon="folder" title="Cache Directory" helper="Open the Directory where Butter keep it's cache" action={<Button text={props.t('Open')}/>}/>
                <Row icon="location_on" title="IP Adress" helper="Set this machine's IP Adress" action={<input type="text"/>}/>

                <div className={[style['settings'], props.settings.showAdvancedsettings?'show-advanced':''].join(' ')}>

                    <div className={style['settings-container']}>
                        <Alert message={props.t('Saved')}/>
                        <ActionBar {...props}/>
                        <Tabs {...props}/>
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
