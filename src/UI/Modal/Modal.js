import React from 'react'

import './Modal.css'
import Backdrop from '../BackDrop/Backdrop'

function Modal(props) {
    return (
        <React.Fragment>
            <Backdrop show={props.show} onClick={props.closeModal} />
            <div
                style={{ transform: props.show ? 'translateY(0)' : 'translateY(-100vh)' }}
                className='Modal'>
                <span className='c' onClick={props.closeModal}>
                    <span className='close'> X </span>
                </span>
                {props.children}
            </div>
        </React.Fragment>
    )
}


export default Modal