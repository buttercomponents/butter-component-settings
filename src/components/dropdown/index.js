import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';

export default (props) => (
    <div className={"boostrap-dropdown " + style.dropdown}>
        <div className={"dropdown-toggle " + style.toggle} data-toggle="dropdown">
            <span>item 1</span>
            <i className="material-icons"></i>
        </div>
        <ul className={"dropdown-menu " + style.menu }>{
            props.options.map((o, i) => (
                <li key={i}>{o}</li>
            ))}
        </ul>

    </div>
)
