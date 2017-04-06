import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Dropdown from '../dropdown/';
import style from '../dropdown/style.styl';

const opts = {
    //Dropdon Type
    type: "color",
    //Display item text
    showText: false,
    //Display selected item label
    showLabel: true,
    //Dropdown actions
    actions: ["More colors..."]
}

export default (props) => (<Dropdown config={opts} {...props}/>)
