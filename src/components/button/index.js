import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';

import {Modal} from '../modal'

class ActionButton extends Component {
    constructor (props) {
        super()
        this.state = {
            showModal: props.showModal || false
        }
        this.toggleModal = this.toggleModal.bind(this)
    }

    toggleModal() {
        this.setState({showModal: !!!this.state.showModal})
    }

    render () {
        let {state} = this;
        let {component, ...props} = this.props;
        const ModalComponent = component

        return (
            <Button apply={this.toggleModal}
                    loading={state.showModal} {...props}>
                {state.showModal?(
                     <Modal position="center" show={state.showModal} action={{apply: this.toggleModal.bind(this)}}>
                         <ModalComponent {...props}/>
                     </Modal>
                 ):null}
            </Button>
        )
    }
}

class Button extends Component {
    constructor (props) {
        super()
        this.apply = props.apply || function () {}
    }

    render() {
        let {props} = this
        return (
            <div className={props.type ? style[props.type] : style.normal} onClick={this.apply.bind(this)}>
                {props.loading ? <i className="material-icons spin">cached</i> : ''}
                <span>{props.title}</span>
                {props.icon ? <i className="material-icons">{props.icon}</i> : ''}
                {props.children}
            </div>
        )
    }
}

export {Button as default, ActionButton}
