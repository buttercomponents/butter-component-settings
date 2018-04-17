import React, { Component } from 'react';
import { translate } from 'react-i18next';
import {HashRouter, Route} from 'react-router-dom';

import {Alert, Buttons, Navbar} from 'butter-base-components';
import {RouterMenu} from 'butter-component-menu';

import style from './styl/style.styl';
import TabPanel from './components/tabs';

let CloseButton = (props) => (props)

let Footer = ({buttons}) => (
    <div className={style.footer}>
        { buttons && buttons.map(
              (i, k) => (<Buttons.Button type="secondary" key={k} {...i}/>)
        )}
    </div>
)

let Settings = ({navbar, footer, settings, tabs, t, ...props}) => (
    <div className={style['settings']}>
        <Alert message={t('Saved')}/>
        <Navbar {...navbar}/>
        <RouterMenu items={tabs} {...props}/>
        {tabs.map((tab, i) => {
             tab.sections = tab.sections || []
             if (tab.items) {
                 tab.sections.push({
                     id: 'default',
                     items: tab.items
                 })
                 delete (tab.items)
             }
             return (
                 <Route path={`/${tab.title}`} key={tab.title} render={() => (
                     <TabPanel  t={t} showAdvanced={props.showAdvanced}
                                  settings={settings}
                                  {...tab} />
                 )}/>
             )
        })}
        {footer && <Footer {...footer}/> }
    </div>
)

let I18nSettings = translate(['settings'], {wait: true, withRef: true})(Settings)

let RoutedSettings = (props) => (
    <HashRouter>
        <Settings {...props}/>
    </HashRouter>
)

let I18nRoutedSettings = translate(['settings'], {wait: true, withRef: true})(RoutedSettings)

export {I18nRoutedSettings as default, I18nSettings, Settings}
