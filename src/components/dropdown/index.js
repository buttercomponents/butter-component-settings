import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './theme.styl';

export default (props) => (
    <div className={style["drop-selector"]}>
        <div className={style["dropdown-toggle"]} data-toggle="dropdown" aria-expanded="false">
            <div className={style["select-item"]}>
                <span>{props.t(props.selected)}</span>
                <i className="material-icons"></i>
            </div>
        </div>
        <ul className={style["dropdown-menu"]}  role="menu">
                <li className="filter-item" data-value="key">item</li>
                <li className="filter-item"  data-value="key">item</li>
                <li className="filter-item" data-value="key">item</li>
        </ul>
    </div>
)
