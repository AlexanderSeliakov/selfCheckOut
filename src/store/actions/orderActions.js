import * as actionType from './actionTypes'
// import axios from '../../axios'


export const selectBurger = (burger) => {
    return {
        type: actionType.SELECTED_BURGER,
        burger: burger
    }
}

export const addIng = (ing) => {
    return {
        type: actionType.ADD_INGREDIENT,
        ingredientName: ing
    }
}

export const removeIng = (ing) => {
    return {
        type: actionType.REMOVE_INGREDIENT,
        ingredientName: ing
    }
}

export const getMeal = (price, note) => {
    return {
        type: actionType.GET_MEAL,
        price: price,
    }
}

export const removeMeal = (price, note, resetPrice) => {
    return {
        type: actionType.REMOVE_MEAL,
        price: price,
        note: note,
        resetPrice: resetPrice
    }
}