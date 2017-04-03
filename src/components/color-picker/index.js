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
                    <div className={style.selected} style={{backgroundColor: state.selected}}></div>
                    <span>{state.selected}</span>
                    <i className="material-icons"></i>
                </div>
                <ul className={"dropdown-menu " + style.menu }>
                    <li className={style.colors}>
                    {
                        Object.keys(props.options).map((k, i) => (
                            state.selected === k ? null:
                            <div key={i} onClick={this.onSelect.bind(this, k)} style={{backgroundColor: props.options[k]}}></div>
                        ))
                    }
                    </li>
                    <li>More colors...</li>
                </ul>
            </div>
        )
    }
}
