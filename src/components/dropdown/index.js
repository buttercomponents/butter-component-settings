import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';

export default class Dropdown extends Component {
    constructor (props) {
        super()
        this.state = {
            selected: props.selected || props.options[0]
        }
    }

    render() {
        let {props, state} = this
        let handler = props.handler || function () {}

        return (
            <div className={"boostrap-dropdown " + style.dropdown}>
                <div className={"dropdown-toggle " + style.toggle} data-toggle="dropdown">
                    <span>{state.selected}</span>
                    <i className="material-icons"></i>
                </div>
                <ul className={"dropdown-menu " + style.menu }>{
                    props.options.map((o, i) => (
                        <li key={i} onClick={handler.bind(this, o)}>{o}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

