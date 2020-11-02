import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Header.css'
// import SideDrawer from './SideDrawer'
import NavLinks from './NavLinks'
import Button from '../UI/Button/Button'

class Header extends Component {
    render() {
        return (
            <header>
                <Button to='/burger' style={{ padding: '0' }} action='HeaderBTN' ><h1>KING</h1></Button>
                <NavLinks />
                <Button action='toCart' style={{ color: 'white' }} to='/cart'> total: {this.props.totalPrice.toFixed(2)}$</Button>
            </header>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        totalPrice: state.cart.totalPrice
    }
}

export default connect(mapStateToProps)(Header)
