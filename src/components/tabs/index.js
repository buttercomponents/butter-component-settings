import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { translate } from 'react-i18next';
import style from './style.styl';

import Action from '../action';
import Button from '../button';
import Row from '../row';
import ActionBar from '../action-bar';
import Modal from '../modal';

//Test themes
function toggle(){
    const root = document.getElementById('root');
    root.className = (root.className === 'theme-dark') ? 'theme-pink' : 'theme-dark';
}

let TabSection = ({t, id, title, items, settings, showAdvanced}) => (
    <section className={style["tab-section"]} id={id}>
        {title?<div className={style.title}>{title}</div>:null}
        {console.log(items)}
        <ReactCSSTransitionGroup
            transitionName="fade"
            transitionAppear={true}
            transitionAppearTimeout={5000}
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}>
            {items.map((e, i) => {
                 let {action, advanced, ...rest} = e
                 if (advanced && ! showAdvanced) {
                     return
                 }

                 let actionElement = (<Action t={t} id={e.id} settings={settings} {...action}/>)
                 return (
                     <Row key={i} action={actionElement} {...rest}/>
                 )
             })}
        </ReactCSSTransitionGroup>
    </section>
)

let TabPanel = ({id, active, sections, ...props}) => (
    <div role="tab-panel" className={active?'active':''} id={id}>
        {console.log(sections, props)}
        {sections.map((s, i) => (
             <TabSection key={i} {...props} {...s} />
         ))}
    </div>
)

export default class Tabs extends Component {
    constructor (props) {
        super()
        this.state = {
            selected: props.selected || 0,
            showAdvanced: props.showAdvanced || false,
            showModal: false
        }
    }

    toggleAdvanced () {
        this.setState({showAdvanced: !this.state.showAdvanced})
    }

    toggleModal () {
        this.setState({showModal: !this.state.showModal})
    }

    render () {
        let {props, state} = this
        return (
            <div>
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionAppear={true}
                    transitionAppearTimeout={5000}
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={1000}>
                    {(state.showModal?<Modal position="center" action={{apply: this.toggleModal.bind(this)}}/>:null)}
                </ReactCSSTransitionGroup>
                <div className={style.navbar}>
                    <ActionBar {...props} action={{toggleAdvanced: this.toggleAdvanced.bind(this)}}/>
                    <br/>
                    <ul id="myTabs" className={style.tabs} role="tablist">
                        {props.tabs.map((t, i) => (
                             <li className={'source ' + (i === state.selected?'active':'')} key={i} href={'#' + t.id} aria-controls={t.id} role="tab" data-toggle="tab">
                                 {props.t(t.title)}
                             </li>
                         ))}
                    </ul>
                </div>

                <div id="tabPanels" className={style['tabs-content']}>
                    {props.tabs.map((t, i) => {
                         t.sections = t.sections || []
                         if (t.items) {
                             t.sections.push({
                                 id: 'default',
                                 items: t.items
                             })
                             delete (t.items)
                         }
                         return <TabPanel key={i} t={props.t}
                                          active={state.selected === i}
                                          showAdvanced={state.showAdvanced}
                                          settings={props.settings}
                                          {...t} />
                     })}
                <div className={style['buttons-content']}>
                        <Button type="secondary" icon="delete_forever" title={props.t('Flush all databases')}/>
                        <Button type="secondary" icon="format_paint" title={props.t('Toggle theme')} apply={toggle}/>
                        <Button type="secondary" icon="restore" title={props.t('Open modal')} apply={this.toggleModal.bind(this)}/>
                        <Button type="secondary" icon="restore" title={props.t('Reset to Default Settings')}/>
                    </div>
                </div>
            </div>
        )
    }
}
