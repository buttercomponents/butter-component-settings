import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './styl/style.styl';

import Tabs from './components/tabs';
import Alert from './components/alert';


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
                        <Tabs {...props}/>
                    </div>

                </div>
            </div>
        );
    }
}

export default translate(['settings'])(Settings);
