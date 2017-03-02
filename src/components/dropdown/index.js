import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';

export default class Dropdown extends Component {
    constructor (props) {
        super()
        this.state = {
            selected: props.selected || props.options[0]
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
                <ul className={"dropdown-menu " + style.menu }>{
                    props.options.map((o, i) => (
                        state.selected === o ? null:
                        <li key={i} onClick={this.onSelect.bind(this, o)}>{o}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

