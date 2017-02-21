import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './theme.styl';

export default (props) => (
    <ul id="myTabs" className={style['nav', 'nav-tabs']} role="tablist">
        {props.tabs.map((t, i) => (
            <li className={i===0?'active':''} key={i} href={t.id} aria-controls={t.id} role="tab" data-toggle="tab">
                {props.t(t.title)}
            </li>
        ))}
    </ul>
)
