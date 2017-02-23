import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';

import Row from '../row';
import Button from '../button';
import Switch from '../switch';
import Dropdown from '../dropdown';

class RowChooser extends Component {
    render() {
        let {props} = this
        let action = props.action
        let actionElement
        switch (action.type) {
            case 'BUTTON':
                actionElement = <Button text={props.t(action.text)}/>
                break
            case 'TEXT':
                actionElement = <input type="text"/>
                break
            case 'DROPDOWN':
                actionElement = <Dropdown {...props}/>
                break
            case 'SWICH':
            default:
                actionElement = <Switch/>
                break
        }
        return (
            <Row icon={props.icon} title={props.t(props.title)} helper={props.t(props.helper)} action={actionElement}/>
        )
    }
}

let TabPanel = (props) => (
    <div role="tabpanel" className="tab-pane" id={props.id}>
        <section id={props.id}>
            {props.items.map((e, i) => (
                 <RowChooser key={i} t={props.t} {...e}/>
             ))}
        </section>
    </div>
)

export default class Tabs extends Component {
    constructor (props) {
        super()
        this.state = {
            selected: props.selected || 0
        }
    }

    render () {
        let {props, state} = this
        return (
            <div className="navbar-s">
                <ul id="myTabs" className={style.tabs} role="tablist">
                    {props.tabs.map((t, i) => (
                         <li className={'source ' + (i === state.selected?'active':'')} key={i} href={'#' + t.id} aria-controls={t.id} role="tab" data-toggle="tab">
                             {props.t(t.title)}
                         </li>
                     ))}
                </ul>
                <div id="tabPanels">
                    {props.tabs.map((t, i) => (
                         <TabPanel key={i} t={props.t} selected={state.selected === i} {...t}/>
                     ))}
                </div>
            </div>
        )
    }
}


