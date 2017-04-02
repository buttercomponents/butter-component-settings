import React, { Component } from 'react';

import Button from '../button';
import Switch from '../switch';
import Dropdown from '../dropdown';

import ActionTypes from 'butter-component-action-types';

export default class Action extends Component {
    constructor (props) {
        super()
        let {id, settings} = props
        this.apply = (value) => settings.set(id, value)
    }

    render() {
        let {type, settings, id, t, ...props} = this.props
        let value = settings[id]
        return (
            (type === ActionTypes.BUTTON)?(<Button text={t(props.text)}/>):
            (type === ActionTypes.TEXT)?(<input type="text" value={value} onChange={this.apply}/>):
            (type === ActionTypes.PASSWORD)?(<input type="password"/>):
            (type === ActionTypes.DROPDOWN)?(<Dropdown apply={this.apply} selected={value} {...props}/>):
            (type === ActionTypes.COLOR)?(<Dropdown apply={this.apply} selected={value} {...props}/>):
            (type === ActionTypes.SWITCH)?(<Switch apply={this.apply} selected={value}/>):
            (<b>Couldn't find an apropiate action type {console.log('Could not find action', type, props)}</b>)
        )
    }
}
