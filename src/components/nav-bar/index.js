import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';
import ActionBar from '../action-bar';

export default ({toggleAdvanced, selected, tabs, ...props}) => (
    <div className={style.navbar}>
        <ActionBar {...props} />
    </div>
)
