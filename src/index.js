import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';

import Row from './components/row';
import Tabs from './components/tabs';
import Alert from './components/alert';
import Button from './components/button';
import Switch from './components/switch';
import Dropdown from './components/dropdown';
import ActionBar from './components/action-bar';


let GoBackButton = (props) => (
    <div className={style['go-back']}>
        <i className={style['material-icons']}>arrow_back</i>
        <span>{props.t("Settings")}</span>
    </div>
)

let CloseButton = (props) => (props)

class Settings extends Component {
    render() {
        let {state, props} = this;
        return (
            <div>
                <div className={[style['settings'], props.settings.showAdvancedsettings?'show-advanced':''].join(' ')}>

                    <div className={style['settings-container']}>

                        <Alert message={props.t('Saved')}/>
                        <ActionBar {...props}/>
                        <Tabs {...props}/>

                        <Row icon="collections_bookmark" title="Torrent Collection" helper="Display a view with your Torrent Collection" action={<Switch/>}/>
                        <Row icon="folder" title="Cache Directory" helper="Open the Directory where Butter keep it's cache" action={<Button text={props.t('Open')}/>}/>
                        <Row icon="format_paint" title="Theme" helper="Select a different Look&Feel for the App" action={<Dropdown {...props} selected="item 1"/>}/>
                        <Row icon="location_on" title="IP Adress" helper="Set this machine's IP Adress" action={<input type="text"/>}/>


                        <div className={style['tab-content-wrapper']}></div>

                        <div className={style['btns']}>
                            <Button type="secondary" icon="delete_forever" text={props.t('Flush bookmarks database')}/>
                            <Button type="secondary" icon="delete_forever" text={props.t('Flush subtitles cache')}/>
                            <Button type="secondary" icon="delete_forever" text={props.t('Flush all databases')}/>
                            <Button type="secondary" icon="restore" text={props.t('Reset to Default Settings')}/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default translate(['settings'])(Settings);
