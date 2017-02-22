import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './theme.styl';

export default (props) => (
    <div className={ "boostrap-dropdown " + style.dropdown }>
        <div className={ "dropdown-toggle " +  style.toggle } data-toggle="dropdown">
            <span>item 1</span>
            <i className="material-icons"></i>
        </div>

        <ul className={"boostrap-dropdown-menu " + style.menu }>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <li>item 5</li>
            <li>item 6</li>
            <li>item 7</li>
            <li>item 8</li>
        </ul>

    </div>
)
