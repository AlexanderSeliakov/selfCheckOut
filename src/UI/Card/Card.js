import React from 'react'

import './Card.css'

function Card(props) {
    return (
        <div className={`Card ${props.className}`} onAnimationEnd= {props.onAnimationEnd}>
            {props.children}
        </div>
    )
}

export default Card
