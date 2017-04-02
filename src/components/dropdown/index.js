import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';

export default class Dropdown extends Component {
    constructor (props) {
        super()
        this.state = {
            selected: props.selected || Object.keys(props.options)[0]
        }
        this.apply = props.apply || function () {}
    }

    onSelect (o) {
        this.setState({selected: o})
        this.apply(o)
    }

    render() {
        let {props, state} = this

        return (
            <div className={"boostrap-dropdown " + style.dropdown}>
                <div className={"dropdown-toggle " + style.toggle} data-toggle="dropdown">
                    <span>{state.selected}</span>
                    <i className="material-icons"></i>
                </div>
                <ul className={"dropdown-menu " + style.menu }>
                    {
                        Object.keys(props.options).map((k, i) => (
                            state.selected === k ? null:
                            <li key={i} onClick={this.onSelect.bind(this, k)}>{props.options[k]}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

