import * as actionType from './actionTypes'
import {errorMSG} from './menuActions'
import axios from '../../axios'


export const reduceAmount = (item, index) => {
    return {
        type: actionType.REDUCE_AMOUNT,
        item: item,
        index: index
    }
}

export const increaseAmount = (item, index) => {
    return {
        type: actionType.INCREASE_AMOUNT,
        item: item,
        index: index
    }
}

export const addToCart = (item) => {
    return {
        type: actionType.ADD_TO_CART,
        item: item
    }
}

export const deleteFromCart = (burger, index) => {
    return {
        type: actionType.DELETE_FROM_CART,
        burger: burger,
        index: index
    }
}

export const checkOutCart = (order) => {
    const ord = Object.keys(order).map(el => el)
    return {
        type: actionType.CHECK_OUT,
        order: ord.length
    }
}

export const closeCheckOutCart = () => {
    return {
        type: actionType.CLOSE_CHECK_OUT,
    }
}

export const checkOut = (cart) => {

    return dispatch => {
        axios.post('/orders.json', cart)
        .then(result=>{
            axios.get('/orders.json')
            .then(res => {
                dispatch(checkOutCart(res.data))
            })
            .catch(err => {
                console.log(err);
                dispatch(errorMSG(err.message))
            })
        })
        .catch(err => {
            console.log(err);
            dispatch(errorMSG(err.message))
        })
    
    }
}