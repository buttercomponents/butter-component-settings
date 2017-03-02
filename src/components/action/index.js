import React, { Component } from 'react';

import Button from '../button';
import Switch from '../switch';
import Dropdown from '../dropdown';

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
            (type === 'BUTTON')?(<Button text={t(props.text)}/>):
            (type === 'TEXT')?(<input type="text" value={value}/>):
            (type === 'PASSWORD')?(<input type="password"/>):
            (type === 'DROPDOWN')?(<Dropdown apply={this.apply} selected={value} {...props}/>):
            (type === 'SWITCH')?(<Switch apply={this.apply} selected={value}/>):
            (<b>Couldn't find an apropiate action type {console.log(type, props)}</b>)
        )
    }
}
