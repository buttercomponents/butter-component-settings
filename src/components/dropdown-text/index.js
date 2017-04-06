import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Dropdown from '../dropdown/';
import style from '../dropdown/style.styl';

const opts = {
    //Dropdon Type
    type: "text",
    //Display item text
    showText: true,
    //Display selected item label
    showLabel: false,
    //Dropdown actions
    actions: []
}

export default (props) => (<Dropdown config={opts} {...props}/>)
