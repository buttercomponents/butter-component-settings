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

        const items = {
            text: (a,b) => <li key={a} onClick={this.onSelect.bind(this, b)}>{props.options[b]}</li>,
            color: (a,b) => <div key={a} onClick={this.onSelect.bind(this, b)} style={{backgroundColor: props.options[b]}}></div>
        }

        const getItems = () =>
            Object.keys(props.options).map((k, i) => (
                state.selected === k ? null: items[props.type](i,k)
            ))

        return (
            <div className={"boostrap-dropdown " + style[props.type + "-dropdown"] }>
                <div className="dropdown-toggle" data-toggle="dropdown">
                    { props.type === "color" ? <div className={style.colorSelected} style={{backgroundColor: state.selected}}></div> : null }
                    <span>{state.selected}</span>
                    <i className="material-icons"></i>
                </div>
                <ul className="dropdown-menu">
                  { (props.type === "color") ? <li className={style.menu}>{getItems()}<li onClick={null}>More colors...</li></li> : getItems() }
                </ul>
            </div>
        )
    }
}
