import React, { Component } from 'react';
import { translate } from 'react-i18next';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import Action from '../action';
import Row from '../row';
import style from './style.styl';

let TabSection = ({t, id, title, items, settings}) => {
    const {showAdvancedSettings}  = settings

    return (
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
                     if (advanced && ! showAdvancedSettings) {
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
}

let ButterTabPanel = ({id, active, sections, title, ...props}) => (
    <div id={id} role='tabpanel'>
        {sections.map((s, i) => {
             let show = s.showIf?s.showIf():true
             if (!show) return null
             return <TabSection key={i} {...props} {...s} />
        })}
    </div>
)

let ModalContent = ({...props}) => (
    <img src="https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif"/>
)

export {ButterTabPanel as default, TabSection}
