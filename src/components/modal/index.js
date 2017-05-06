import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import style from './style.styl';

let Modal = ({position, action, children}) => (
    <div className={style.modal} data-position={position} onClick={action.apply} key={0}>
        <div className={style.widget}>
            {children}
        </div>
        <div className={style.overlay}></div>
    </div>
)

class ButterModal extends Component {
    render () {
        let {show, ...props} = this.props
        return (
            <CSSTransitionGroup
                transitionName="popup"
                transitionAppear={true}
                transitionAppearTimeout={200}
                transitionEnterTimeout={200}
                transitionLeaveTimeout={200}>
                {show?<Modal {...props}/>:null}
            </CSSTransitionGroup>
        )
    }
}

export {ButterModal as default, Modal}
