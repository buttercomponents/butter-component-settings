import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';
import ActionBar from '../action-bar';
import NavBar from '../nav-bar';

export default (props) => (
    <div className={style.window}>
        <NavBar {...props} selected={null} action={{
                //toggleAdvanced: this.toggleAdvanced.bind(this),
                //goBack: props.action.goBack
        }}/>
        <div className={style.container}>
            {props.children}
        </div>
    </div>
)
