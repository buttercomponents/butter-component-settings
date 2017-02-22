import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './theme.styl';

export default (props) => (
        <div id="action-bar" className={style['actions-bar']}>
                <ul className={style['toolbar']}>
                    <li>
                        <i data-toggle="tooltip" data-placement="left" title={props.t('Keyboard Shortcuts')} className="material-icons">keyboard</i>
                    </li>
                    <li>
                        <i data-toogle="tooltip" data-placement="left" title={props.t('Help Section')} className="material-icons magnet-link">help_outline</i>
                    </li>
                    <div className={style['toolbar-settings']}></div>
                </ul>
        </div>
)
