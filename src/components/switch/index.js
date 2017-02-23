import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';

export default (props) => (
    <label className={style.switch}>
        <input className={style['settings-checkbox']} type="checkbox"/>
        <div className={style.slider}></div>
    </label>
)
