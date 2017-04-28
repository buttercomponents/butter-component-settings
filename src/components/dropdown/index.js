import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import { translate } from 'react-i18next';
import style from './style.styl';

//Dropdown Item component

let DropdownItem = (props) => (
    <li className={style.action} onClick={props.onSelect}>
        {props.value}
    </li>
)

let ColorDropdownItem = (props) => (
    <li style={{backgroundColor: props.value}} className={style.action} onClick={props.onSelect}>
    </li>
)

//Label Component
const LabelItem = (props) => (
    <span>{props.value}</span>
)

const ColorLabelItem = (props) => (
    <div>
        <div className={style.label} style={{backgroundColor: props.value}}/>
        <LabelItem {...props}/>
    </div>
)

const DropdownToggle = (props) => (
    <div className="dropdown-toggle" data-toggle="dropdown">
        {props.children}
        <i className="material-icons"></i>
    </div>
)

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
        const Item = props.config.item
        const Label = props.config.label
        const ExtraComponent = props.extra

        const selected = props.options[state.selected] || state.selected

        return  (
            <div className={"boostrap-dropdown " + style[ "dropdown-" + props.config.type] }>
                <DropdownToggle {...props}>
                    <Label value={selected} />
                </DropdownToggle>
                <div className="dropdown-menu">
                    <ul className={style.items}>
                        {
                            Object.keys(props.options).map((k, i) => (
                                state.selected === k ? null :
                                <Item
                                    key={i}
                                    onSelect={this.onSelect.bind(this, k)}
                                    value={props.options[k]} />
                            ))
                        }
                    </ul>
                    {props.extra ? <ExtraComponent selected={selected} apply={this.onSelect.bind(this)}/>:null}

                </div>
            </div>
        )
    }
}

Dropdown.defaultProps = {
    config : {
        type: "text",
        item: DropdownItem,
        label: LabelItem
    }
}

const colorOpts = {
    type: "color",

    item: ColorDropdownItem,
    label: ColorLabelItem
}

class PickerWrapper extends Component {
    constructor (props) {
        super()
        this.state = {
            show: false
        }
    }

    show (e) {
        this.setState({show: true})
    }

    changeColor (c) {
        this.props.apply(c.hex)
    }

    setColor (c) {
        //this.setState({show: false})
        this.props.apply(c.hex)
    }


    render () {
        let {props, state} = this

        if (state.show) {
            return (
                <ChromePicker color={props.selected}
                              onChange={this.changeColor.bind(this)}
                              onChangeComplete={this.setColor.bind(this)}
                />)
        }
        return (
            <DropdownItem value="More colors..." onSelect={this.show.bind(this)}/>
        )
    }
}

let DropdownColor = (props) => (
    <Dropdown config={colorOpts} extra={PickerWrapper} {...props}/>
)

export { Dropdown as default, DropdownColor }
