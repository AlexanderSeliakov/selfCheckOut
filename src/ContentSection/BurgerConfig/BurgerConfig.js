import React, { Component } from 'react'
import Carousel from 'react-elastic-carousel';

import './BurgerConfig.css'
import Ingredients from './Ingredients'
import Button from '../../UI/Button/Button'


class BurgerConfig extends Component {

    state = {
        meal: false,
        extraMealPrice: 0,
        0: null,
        1: null,
    }

    mealHandler = () => {
        if (this.state.meal) {
            this.props.removeMeal(3 + this.state.extraMealPrice, ' ')
            this.carousel.slidePrev()
        } else {
            this.props.addMeal(3)
            this.carousel.slideNext()
        }
        this.setState((prev) => { return { meal: !prev.meal } })
    }

    cartHandler = () => {
        this.props.selectedBurger.note = (this.state[0] && this.state[1]) ? this.state[0] + " and " + this.state[1] : ''
        this.props.addToCart(this.props.selectedBurger);
        this.props.closeModal()
    }


    render() {

        const sB = { ...this.props.selectedBurger };
        const at = [...this.props.ateria]

        const ingredientsList = Object.keys(sB.ingredients).map(el => (
            <Ingredients
                key={el}
                ingredientPrice={this.props.ingredientPrices[el]}
                name={el}
                price={sB.price}
                amount={sB.ingredients[el] + sB.extra[el]}
                add={() => this.props.addIng(el)}
                remove={() => this.props.removeIng(el)}
            />
        ))

        const ateria = at.map((itm, i) => (
            <div key={itm} style={{ width: '100%' }}>
                { itm.map(el => (
                    <Button
                        style={this.state[i] === el ? { color: 'red' } : null}
                        key={el}
                        onClick={() => { this.setState({ [i]: el }) }}
                    >{el}
                    </Button>
                ))}
            </div>
        ))



        return (
            <div className='BurgerConfig'>
                <Carousel ref={ref => (this.carousel = ref)}
                    enableSwipe={false}
                    enableMouseSwipe={false}
                    pagination={false}
                    showArrows={false}>

                    <div className='Confing'>

                        <img src={sB.img} alt={sB.name} />

                        <div className='IngredientsList'>
                            {ingredientsList}
                        </div>

                        <p style={{ margin: '2rem' }}>Price of Burger :<b> {sB.price.toFixed(2)}</b></p>

                        <Button
                            onClick={this.cartHandler}
                        >Add to Cart</Button>
                        <Button
                            onClick={this.mealHandler}
                        >Get Meal</Button>
                    </div>

                    <div className='Confing' style={{ display: `${!this.state.meal ? 'none' : 'block'}` }}>

                        <div className='Ateria'>
                            {ateria}
                        </div>

                        <div className='o'>

                            <p style={{ margin: '2rem' }}>Price of Meal : <b>{sB.price.toFixed(2)}</b></p>

                            <Button
                                onClick={this.mealHandler}
                            >Remove Meal</Button>
                            <Button
                                disabled={!(this.state[0] && this.state[1])}
                                onClick={this.cartHandler}
                            >Add to Cart</Button>
                        </div>
                    </div>

                </Carousel>
            </div>
        )
    }
}





export default BurgerConfig