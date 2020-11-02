import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Cart.css'
import Card from '../../UI/Card/Card'
import Button from '../../UI/Button/Button'
import Modal from '../../UI/Modal/Modal'
import * as menuPageActions from '../../store/actions/index'

class Cart extends Component {

    state = {
        process: false,
        modal: false
    }

    modalHandler = () => {
        this.setState((prevState) => {
            return { modal: !prevState.modal }
        })
        this.props.closeCheckOut()

    }

    render() {

        const orderConfiguration = [...this.props.cart].map(el => {
            const extra = el.type === 'burger' && Object.keys(el.extra).reduce((obj, i) => {
                if (el.extra[i] !== 0)
                    obj[i] = el.extra[i]
                return obj;
            }, {});

            return {
                name: el.name,
                type: el.type,
                note: el.note || '',
                extra: el.type === 'burger' ? { ...extra } : {},
                amount: el.amount,
            }
        })

        const cartContent = (
            this.props.cart.map((el, index) => (

                <Card className="CartCard" key={el.name + index}>
                    <div>
                        <h3>{el.name}</h3>
                        <p>{el.note}</p>
                        <img src={el.img} alt={el.name} />
                    </div>

                    <div className='OrderConfig'>
                        <div>
                            <p>Price: <b>{el.price.toFixed(2)}$</b></p>
                            <p>Amount : <b>{el.amount}</b></p>
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                                <Button onClick={() => this.props.reduceAmount(el, index)}>Remove</Button>
                                <Button onClick={() => this.props.increaseAmount(el, index)}>Add</Button>
                            </div>

                            <p>total price : <b>{(el.amount * el.price).toFixed(2)}$</b></p>
                            <ul style={{ marginBottom: '0.5rem' }}>
                                {el.extra
                                    && Object.keys(el.extra)
                                        .map(ex => el.extra[ex] !== 0
                                            ? <li key={ex}>
                                                {ex + ' : ' + (el.extra[ex])}
                                            </li>
                                            : null)}
                            </ul>

                        </div>
                        <Button onClick={() => this.props.deleteFromCart(el, index)}>Delete</Button>
                    </div>
                </Card>
            ))
        )

        if (this.props.cart.length === 0) {
            return (
                <h3>Your cart is empty!</h3>
            )

        } else {

            return (
                <React.Fragment>


                    <Button disabled={this.state.process && !this.props.error}
                        onClick={() => {
                            this.props.checkOut(orderConfiguration);
                            this.setState({ process: true, modal: true })
                        }}>Check Out</Button>

                    {((this.state.modal && this.props.order) || this.props.error) &&
                        <Modal show={this.state.modal} closeModal={this.modalHandler}>
                            {this.props.error
                                ? <p>{this.props.error}</p>
                                : <p>Your queue number is {this.props.order} </p>}
                        </Modal>
                    }

                    <div className='CartList'>

                        {cartContent}

                    </div>

                </React.Fragment >
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart.cart,
        selectedBurger: state.order.selectedBurger,
        order: state.cart.order,
        error: state.menu.errorMSG
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        selectBurger: (burger) => dispatch(menuPageActions.selectBurger(burger)),
        reduceAmount: (itm, i) => dispatch(menuPageActions.reduceAmount(itm, i)),
        increaseAmount: (itm, i) => dispatch(menuPageActions.increaseAmount(itm, i)),
        deleteFromCart: (item, index) => dispatch(menuPageActions.deleteFromCart(item, index)),
        checkOut: (cart) => dispatch(menuPageActions.checkOut(cart)),
        closeCheckOut: () => dispatch(menuPageActions.closeCheckOutCart())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)