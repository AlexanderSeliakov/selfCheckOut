import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Menu.css'
import * as menuPageActions from '../../store/actions/index'
import Card from '../../UI/Card/Card'
import Modal from '../../UI/Modal/Modal'
import Spinner from '../../UI/Spinner/Spinner'
import Button from '../../UI/Button/Button'
import BurgerConfig from '../BurgerConfig/BurgerConfig'

class MenuList extends Component {

    state = {
        modal: false,
        added: null
    }

    componentDidMount() {
        this.props.setMenu(this.props.match.path)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.path !== this.props.match.path) {
            this.props.setMenu(this.props.match.path)
        }
    }

    cartHandler = (id) => {
        this.props.addToCart(id)
    }

    animationHandler = (el) => {
        this.setState((prevState) => {
            return { animate: !prevState.animate, added: el }
        })
    }

    modalHandler = () => {
        this.setState((prevState) => {
            return { modal: !prevState.modal }
        })
    }

    configBurger = (burger) => {
        this.setState({ modal: true })
        this.props.selectBurger(burger)
    }

    render() {

        let menu = this.props.errorMSG
            ? <p style={{ textAlign: 'center' }}>{this.props.errorMSG}</p>
            : <Spinner />

        let modalMenu;

        if (this.props.menu !== null) {
            menu = (
                <React.Fragment>
                    <div className='MenuList'>
                        {this.props.menu.map(el => (
                            <Card key={el.name} 
                                className={`MenuItem ${el.id===this.state.added && 'g'}`}

                                onAnimationEnd={()=>this.setState({added: null})}
                               >

                                <h2>{el.name}</h2>

                                <img className={el.type === 'burger' && 'brgr'} src={el.img} alt={el.name} />

                                <br />

                                {el.type === 'burger'
                                    ? <Button onClick={() => this.configBurger(el)}>Select</Button>
                                    : <Button
                                        disabled={this.state.added}
                                        onClick={() => { this.props.addToCart(el); this.animationHandler(el.id) }}
                                    >Buy for {el.price}$</Button>
                                }

                            </Card>
                        ))}
                    </div>

                </React.Fragment >
            )
        }
        if (this.state.modal) {
            modalMenu = (
                <BurgerConfig {...this.props} closeModal = {this.modalHandler} />
            )
        }

        return (
            <React.Fragment>

                {this.state.modal &&
                    <Modal show={this.state.modal} closeModal={this.modalHandler}>
                        {modalMenu}
                    </Modal>
                }

                {menu}

            </React.Fragment>
        )
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
        menu: state.menu.menu,
        selectedBurger: state.order.selectedBurger,
        ingredientPrices: state.order.ingredientPrices,
        ateria: state.order.ateria,
        cart: state.cart.cart,
        totalPrice: state.cart.totalPrice,
        errorMSG: state.menu.errorMSG
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setMenu: (menuSection) => dispatch(menuPageActions.setMenu(menuSection)),
        selectBurger: (burger) => dispatch(menuPageActions.selectBurger(burger)),
        addIng: (ing) => dispatch(menuPageActions.addIng(ing)),
        removeIng: (ing) => dispatch(menuPageActions.removeIng(ing)),
        addMeal: (price, note) => dispatch(menuPageActions.getMeal(price, note)),
        removeMeal: (price, note, resetPrice) => dispatch(menuPageActions.removeMeal(price, note, resetPrice)),
        addToCart: (item) => dispatch(menuPageActions.addToCart(item)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MenuList)

// export default FFF