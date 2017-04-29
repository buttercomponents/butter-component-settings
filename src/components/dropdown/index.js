import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';

//Dropdown Item component

let DropdownItem = (props) => (
    <li className={style.action} {...props}>
        {props.value}
    </li>
)

const hideAll = () => {
//document.body.querySelectorAll('.dropdown .open').map((a) => a.classList.remove('open'))

}

class Dropdown extends Component {

    constructor (props) {
        super()
        this.state = {
            active: false,
            selected: props.selected || Object.keys(props.options)[0]
        }
        this.apply = props.apply || function () {}
    }

    onSelect (o) {
        this.setState({selected: o})
        this.Toggle()
        this.apply(o)
    }

    Toggle() {
        this.setState({ active: !this.state.active})
    }

    Hide () {
        this.setState({ active: false});
    }

    render() {
        let {props, state} = this

        //Label template
        const Label = (props) => (
            <div className={style.label} style={{backgroundColor: state.selected}}/>
        )

        // Get items
        const getItems = (props) => Object.keys(props.options).map((k, i) => (
            state.selected === k ? null :
            <DropdownItem
                key={i}
                style={{backgroundColor: props.config.type === 'color' ? k : null}}
                onClick={this.onSelect.bind(this, k)}
                value={props.config.showText ? props.options[k] : null} />
        ))

        return  (
            <div className={style["dropdown-" + props.config.type] + (this.state.active ? ' open' : '')} tabIndex="0" onBlur={this.Hide.bind(this)}>
                <div className="dropdown-toggle" onClick={this.Toggle.bind(this)}>
                    {props.config.showLabel === true ? <Label />  : null}
                    <span>{state.selected}</span>
                    <i className="material-icons"></i>
                </div>
                <div className="dropdown-menu">
                    <ul className={style.items}>{getItems(props)}</ul>
                    {props.children}
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
        showLabel: false
    }
}

const colorOpts = {
    type: "color",
    showText: false,
    showLabel: true
}

let DropdownColor =  (props) => (
    <Dropdown config={colorOpts}  {...props}>
        <DropdownItem value="More colors..."/>
    </Dropdown>
)

export { Dropdown as default, DropdownColor }
