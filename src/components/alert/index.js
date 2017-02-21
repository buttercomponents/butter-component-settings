import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './theme.styl';

export default (props) => (
    <div className={style['success']}>
        {props.message}
        <i className="material-icons">check</i>
    </div>
)
