import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';

export default class Button extends Component {
    constructor (props) {
        super()
        this.apply = props.apply || function () {}
    }

    render() {
        let {props} = this
        return (
            <div className={props.type ? style[props.type] : style.normal} onClick={this.apply.bind(this)}>
                <span>{props.text}</span>
                {props.icon ? <i className="material-icons">{props.icon}</i> : ''}
            </div>
        )
    }
}
