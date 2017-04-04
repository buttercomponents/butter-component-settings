import React, { Component } from 'react';
import Dropdown from '../dropdown';
import { translate } from 'react-i18next';
import style from './style.styl';

export default class ColorPicker extends Dropdown {

    render() {
        let {props, state} = this
        return (
            <div className={"boostrap-dropdown " + style["color-dropdown"]}>
                <div className="dropdown-toggle" data-toggle="dropdown">
                    <div className={style.selected} style={{backgroundColor: state.selected}}></div>
                    <span>{state.selected}</span>
                    <i className="material-icons"></i>
                </div>
                <div className="dropdown-menu">
                    <ul className={style.colors}>
                    {
                        Object.keys(props.options).map((k, i) => (
                            state.selected === k ? null:
                            <li key={i} onClick={this.onSelect.bind(this, k)} style={{backgroundColor: props.options[k]}}></li>
                        ))
                    }
                    </ul>
                    <div className={style.button}>More colors...</div>
                </div>
            </div>
        )
    }
}
