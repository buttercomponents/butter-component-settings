import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import {HashRouter, Route, Redirect, Switch} from 'react-router-dom';

import {Alert, Buttons, Navbar, Window} from 'butter-base-components';
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

let relativePath = (location, path) => {
    let basepath = location.pathname.split('/').slice(0, -1).join('/')
    return `${basepath}/${path}`
}

let Settings = ({navbar, footer, settings, location, tabs, t, ...props}) => (
    <div className={style['settings']}>
        <Alert message={t('Saved')}/>
        <Navbar  left={<RouterMenu items={tabs.map((c) => ({
                path: relativePath(location, c.title),
                ...c
        }))} {...props}/>}
                 {...navbar}
        />
        <Switch>
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
                     <Route path={`/settings/${tab.title}`} key={tab.title} render={() => (
                         <TabPanel  t={t} showAdvanced={props.showAdvanced}
                                      settings={settings}
                                      {...tab} />
                     )}/>
                 )
            })}
            <Route render={() => <Redirect to={`/settings/General`} />}/>
        </Switch>
        {footer && <Footer {...footer}/> }
    </div>
)

Settings.propTypes = {
    settings: PropTypes.object.isRequired,
    tabs: PropTypes.array.isRequired
}

let I18nSettings = translate(['settings'], {wait: true, withRef: true})(Settings)

let Test = (props) => (
    <HashRouter>
        <Route render={(routerProps) => (
            <Window>
                <Settings {...props} {...routerProps}/>
            </Window>
        )} />
    </HashRouter>)

let I18nTest = translate(['settings'], {wait: true, withRef: true})(Test)

export {I18nTest as default, I18nSettings, Settings}
