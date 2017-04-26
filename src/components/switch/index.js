import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';

export default class Switch extends Component {
    constructor (props) {
        super()
        this.state = {
            selected: props.selected || false
        }
        this.apply = props.apply || function () {}
    }

    onChange () {
        this.setState({selected: !this.state.selected})
        this.apply(this.state.selected)
    }

    render () {
        let {props, state} = this
        return (
            <label className={style.switch}>
                <input className={style['settings-checkbox']} checked={state.selected} type="checkbox" onChange={this.onChange.bind(this)}/>
                <div className={style.slider}></div>
            </label>
        )
    }
}
