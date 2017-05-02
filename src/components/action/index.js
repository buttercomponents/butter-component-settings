import React, { Component } from 'react';
import {ActionButton} from '../button';
import Switch from '../switch';
import Dropdown, { DropdownColor } from '../dropdown';
import ActionTypes from 'butter-action-types';

export default class Action extends Component {
    constructor (props) {
        super()
        let {id, settings} = props
        this.apply = (value) => settings.set(id, value)
    }

    render() {
        let {type, id, t, ...props} = this.props
        let value = props.settings.get(id) || props.default
        return (
            (type === ActionTypes.BUTTON)?(<ActionButton title={t(props.title)} {...props} />):
            (type === ActionTypes.TEXT)?(<input type="text" defaultValue={value} onChange={this.apply}/>):
            (type === ActionTypes.NUMBER)?(<input type="text" defaultValue={value} onChange={this.apply}/>):
            (type === ActionTypes.LABEL)?(<span>{t(props.title)}</span>):
            (type === ActionTypes.PASSWORD)?(<input type="password" defaultValue={value}/>):
            (type === ActionTypes.DROPDOWN)?(<Dropdown apply={this.apply} selected={value} {...props}/>):
            (type === ActionTypes.COLOR)?(<DropdownColor apply={this.apply} selected={value} {...props}/>):
            (type === ActionTypes.SWITCH)?(<Switch apply={this.apply} selected={value}/>):
            (<b className="error">Couldn't find an apropiate action for {type} {console.log('Could not find action', type, props)}</b>)
        )
    }
}
