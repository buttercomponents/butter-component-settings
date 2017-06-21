import React, { Component } from 'react';
import Tabs from 'react-simpletabs';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import { translate } from 'react-i18next';
import style from './style.styl';

import Action from '../action';

import Row from '../row';
import ActionBar from '../action-bar';

import {Buttons, Modal} from 'butter-base-components';

//Test themes
function toggle(){
    const root = document.getElementById('root');
    root.className = (root.className === 'theme-dark') ? 'theme-pink' : 'theme-dark';
}

let TabSection = ({t, id, title, items, settings, showAdvanced}) => (
    <section className={style["tab-section"]} id={id}>
        {title?<div className={style.title}>{title}</div>:null}
        {console.log(items)}
        <CSSTransitionGroup
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
        </CSSTransitionGroup>
    </section>
)

let TabPanel = ({id, active, sections, title, ...props}) => (
    <div id={id}>
        {sections.map((s, i) => {
             let show = s.showIf?s.showIf():true
             console.error(s.title, show)
             if (!show) return null
             return <TabSection key={i} {...props} {...s} />
         })}
    </div>
)

let NavBar = ({toggleAdvanced, selected, tabs, ...props}) => (
    <div className={style.navbar}>
        <ActionBar {...props} />
        <br/>

    </div>
)

let ModalContent = ({...props}) => (
    <img src="https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif"/>
)

export default class ButterTabs extends Component {
    constructor (props) {
        super()
        this.state = {
            selected: props.selected || 1,
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
                <CSSTransitionGroup
                    transitionName="popup"
                    transitionAppear={true}
                    transitionAppearTimeout={5000}
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={1000}>
                    <Modal position="center" action={{apply: this.toggleModal.bind(this)}} show={state.showModal}>
                        <ModalContent/>
                    </Modal>
                </CSSTransitionGroup>
                <NavBar {...props} selected={state.selected} action={{
                    toggleAdvanced: this.toggleAdvanced.bind(this),
                    goBack: props.action.goBack
                }}/>
                <Tabs id="tabPanels" tabActive={state.selected} className={style['tabs-content']}>
                    {props.tabs.map((t, i) => {
                         t.sections = t.sections || []
                         if (t.items) {
                             t.sections.push({
                                 id: 'default',
                                 items: t.items
                             })
                             delete (t.items)
                         }
                         return <Tabs.Panel title={t.id} key={i}>
                             <TabPanel  t={props.t}
                                        showAdvanced={state.showAdvanced}
                                        settings={props.settings}
                                        {...t} />
                         </Tabs.Panel>
                     })}
                </Tabs>
                <div className={style['buttons-content']}>
                    <Buttons.Button type="secondary" icon="delete_forever" title={props.t('Flush all databases')}/>
                    <Buttons.Button type="secondary" icon="format_paint" title={props.t('Toggle theme')} apply={toggle}/>
                    <Buttons.Button type="secondary" icon="restore" title={props.t('Open modal')} apply={this.toggleModal.bind(this)}/>
                    <Buttons.Button type="secondary" icon="restore" title={props.t('Reset to Default Settings')}/>
                </div>
            </div>
        )
    }
}
