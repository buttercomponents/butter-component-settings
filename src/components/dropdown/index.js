import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';

class Dropdown extends Component {
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

        //Item template
        const Item = (props) => (
            <li {...props}
                className={style.item}
                style={{backgroundColor: props.config.type === 'color' ? props.value : null}}
                onClick={this.onSelect.bind(this, props.value)}>
                    {props.config.showText ? props.value : null}
            </li>
        )

        //Label template
        const Label = (props) => (
            <div className={style.label} style={{backgroundColor: state.selected}}/>
        )

        // Action template
        const Action = (props) => (
            <div className={style.action}>{props.value}</div>
        )

        // Get items
        const getItems = () => Object.keys(props.options).map((k, i) => (
            state.selected === k ? null : <Item  key={i} value={props.options[k]} {...props}/>
        ))

        // Get Actions
        const getActions = () => Object.keys(props.config.actions).map((k, i) => (
            <Action key={i} value={props.config.actions[i]}/>
        ))

        return  (
            <div className={"boostrap-dropdown " + style[ "dropdown-" + props.config.type] }>
                <div className="dropdown-toggle" data-toggle="dropdown">
                     {props.config.showLabel === true ? <Label />  : null}
                    <span>{state.selected}</span>
                    <i className="material-icons"></i>
                </div>
                <div className="dropdown-menu">
                    <ul className={style.items}>{getItems()}</ul>
                    {   //Load dropdown actions (Extra special stuff!)
                        getActions()
                    }
                </div>
            </div>
        )
    }
}

Dropdown.defaultProps = {
    config : {
        //Dropdon Type
        type: "text",
        //Display item text
        showText: true,
        //Display selected item label
        showLabel: false,
        //Dropdown actions
        actions: []
    }
}

// Config for Dropdown color
const opts = {
    //Dropdon Type
    type: "color",
    //Display item text
    showText: false,
    //Display selected item label
    showLabel: true,
    //Dropdown actions
    actions: ["More colors..."]
}

let DropdownColor =  (props) => (<Dropdown config={opts}  {...props}/>)

module.exports = {
    Dropdown,
    DropdownColor
}
