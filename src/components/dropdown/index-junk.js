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



        const item = (props) => (
                <li {...props}  className={style.item}> {props.text || null }</li>
        )

        const getItems = (props) =>
            Object.keys(props.options).map((k, i) => (
                state.selected === k ? null: (<item key={i}
                                                    value={k}
                                                    style={{backgroundColor: k}}
                                                    onClick={this.onSelect.bind(this, props.value)}
                                                    text={props.options[k]} {...props}/>
                                                )
            ))

        const Base = (props) => (
            <div className={"boostrap-dropdown " + style[ "dropdown-" + props.config.type] }>
                <div className="dropdown-toggle" data-toggle="dropdown">
                    {props.config.label || null}
                    <span>{state.selected}</span>
                    <i className="material-icons"></i>
                </div>
                <div className="dropdown-menu">
                    <ul className={style.items}>{getItems(props)}</ul>
                </div>
            </div>
        )

        const opts = {
            type: "text",
            label: <div className={style.label} style={{backgroundColor: state.selected}}></div>
        }

        return ( <Base config={opts}  {...props}/> )

    }
}
