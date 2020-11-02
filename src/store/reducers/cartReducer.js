import * as actionType from '../actions/actionTypes'

const initState = {
    cart: [],
    totalPrice: 0,
    order: null,
}

const reducer = (state = initState, action) => {
    switch (action.type) {


        case actionType.REDUCE_AMOUNT:
            let decreaseAmountInCart = [...state.cart]
            decreaseAmountInCart[action.index].amount = decreaseAmountInCart[action.index].amount - 1 > 0
                ? decreaseAmountInCart[action.index].amount - 1
                : decreaseAmountInCart.splice(action.index, 1)
            return {
                ...state,
                cart: [...decreaseAmountInCart],
                totalPrice: state.totalPrice >= 0 && state.totalPrice - action.item.price
            }

        case actionType.INCREASE_AMOUNT:
            let increaseAmountInCart = [...state.cart]
            increaseAmountInCart[action.index].amount = increaseAmountInCart[action.index].amount + 1
            return {
                ...state,
                cart: [...increaseAmountInCart],
                totalPrice: state.totalPrice + action.item.price
            }



        case actionType.ADD_TO_CART:
            let g = [...state.cart]
            let find = g.find(x => x.type !== 'burger' && x.id === action.item.id);
            if (find === undefined) {
                g.push(action.item)
            } else {
                g.map(el => el.id === find.id ? (el.amount = el.amount + 1) : el.amount);
            }

            return {
                ...state,
                cart: [...g],
                totalPrice: state.totalPrice + action.item.price
            }


        case actionType.DELETE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((_, index) => action.index !== index),
                totalPrice: state.totalPrice >= 0 && state.totalPrice - (action.burger.price * action.burger.amount)
            }


        case actionType.CHECK_OUT:
            return {
                ...state,
                order: action.order,
                errorMSG: null
            }

        case actionType.CLOSE_CHECK_OUT:
            if (!state.errorMSG) {
                return {
                    ...state,
                    cart: [],
                    totalPrice: 0,
                    selectedBurger: null,
                    order: null,
                    errorMSG: null
                }
            }
            break

        default:
            return state
    }
}


export default reducer