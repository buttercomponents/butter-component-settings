import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';

import Row from '../row';
import Button from '../button';
import Switch from '../switch';
import Dropdown from '../dropdown';
import ActionBar from '../action-bar';

let Action = (props) => (
    (props.type === 'BUTTON')?(<Button text={props.t(props.text)}/>):
    (props.type === 'TEXT')  ?(<input type="text"/>):
    (props.type === 'DROPDOWN')?(<Dropdown {...props}/>):
    (props.type === 'SWITCH')?(<Switch/>):
    (<b>Couldn't find an apropiate action type {console.log(props)}</b>)
)

let TabPanel = (props) => (
    <div role="tabpanel" className={style["tab-panel"]} id={props.id}>
        <section id={props.id}>
            {props.items.map((e, i) => {
                 let {action, ...rest} = e
                 let actionElement = (<Action t={props.t} {...action}/>)
                 return (
                     <Row key={i} action={actionElement} {...rest}/>
                 )
             })}
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
            <div>
            <div className="navbar-s">
                <ul id="myTabs" className={style.tabs} role="tablist">
                    {props.tabs.map((t, i) => (
                         <li className={'source ' + (i === state.selected?'active':'')} key={i} href={'#' + t.id} aria-controls={t.id} role="tab" data-toggle="tab">
                             {props.t(t.title)}
                         </li>
                     ))}
                </ul>
                <ActionBar {...props}/>
            </div>
            <div id="tabPanels" className={style['tabs-content']}>
                {props.tabs.map((t, i) => (
                     <TabPanel key={i} t={props.t} selected={state.selected === i} {...t}/>
                 ))}
                 <div className={style['buttons-content']}>
                     <Button type="secondary" icon="delete_forever" text={props.t('Flush bookmarks database')}/>
                     <Button type="secondary" icon="delete_forever" text={props.t('Flush subtitles cache')}/>
                     <Button type="secondary" icon="delete_forever" text={props.t('Flush all databases')}/>
                     <Button type="secondary" icon="restore" text={props.t('Reset to Default Settings')}/>
                 </div>
            </div>
            </div>
        )
    }
}
