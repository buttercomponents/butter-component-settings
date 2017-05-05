import React, { Component } from 'react';
import style from './style.styl';

let Modal = ({position, action, children}) => (
    <div className={style.modal} data-position={position} onClick={action.apply} key={style.modal}>
        <div className={style.widget}>
            {children}
        </div>
        <div className={style.overlay}></div>
    </div>
)

class ButterModal extends Component {
    render () {
        let {show, ...props} = this.props
        if (! show) return null
        return (
            <Modal {...props}/>
        )
    }
}

export {ButterModal as default, Modal}
