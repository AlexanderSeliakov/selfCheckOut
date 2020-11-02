import React from 'react'
import Button from '../../UI/Button/Button'


const Ingredients = (props) => (

    <div className='Ingredient'>
        <div className='Label'>{props.name} : {props.amount}</div>
        <p>price: {props.ingredientPrice}$</p>
        <div>
            <Button onClick={props.remove}
                disabled={props.amount <= 0}
                className='Less'>remove</Button>

            <Button onClick={props.add}
                className='More'>add</Button>
        </div>
    </div>

)


export default Ingredients