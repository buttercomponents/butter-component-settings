import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './styl/style.styl';

import Tabs from './components/tabs';
import Alert from './components/alert';
import Window from './components/window';

let CloseButton = (props) => (props)

class Settings extends Component {
    render() {
        let {state, props} = this;

        return (
            <Window {...props}>
                <div className={[style['settings'], props.settings.get('showAdvancedsettings')?'show-advanced':''].join(' ')}>
                        <Alert message={props.t('Saved')}/>
                        <Tabs {...props}/>
                </div>
            </Window>
        )
    }
}

export default translate(['settings'], {wait: true, withRef: true})(Settings);
