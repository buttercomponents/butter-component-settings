import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';

export default class Modal extends Component {
    constructor(props) {
        super();
        this.toggleModal = props.handler.toggleModal || function(){};
    }

    render (){
        let {props} = this;
        return (
            <div className={style.modal} data-position={props.position} data-show={props.visible}>
                <div className={style.widget}>
                    <img src={"https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif"} />
                </div>
                <div className={style.overlay} onClick={this.toggleModal.bind(this)}></div>
            </div>
        )
    }
}
