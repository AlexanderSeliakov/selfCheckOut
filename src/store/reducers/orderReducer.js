import * as actionType from '../actions/actionTypes'

const initState = {
    selectedBurger: null,
    ingredientPrices: {  // can be defined with DB
        salad: 0.4,
        bacon: 0.9,
        cheese: 0.7,
        meat: 1,
        onions: 1,
    },
    ateria: [
        ['Coca-Cola', 'Fanta', 'Sprite'],
        ['French fries', 'Sweet potato']
    ],
}

const extraIngredients = {
    meat: 0,
    bacon: 0,
    cheese: 0,
    onions: 0,
    salad: 0
}

const reducer = (state = initState, action) => {
    switch (action.type) {

        case actionType.SELECTED_BURGER:
            return {
                ...state,
                selectedBurger: {
                    ...action.burger,
                    note: null,
                    extra: { ...extraIngredients }
                }
            }

        case actionType.ADD_INGREDIENT:

            return {
                ...state,
                selectedBurger: {
                    ...state.selectedBurger,
                    extra: {
                        ...state.selectedBurger.extra,
                        [action.ingredientName]: state.selectedBurger.extra[action.ingredientName] + 1
                    },
                    price: (state.selectedBurger.extra[action.ingredientName] >= 0 ? state.selectedBurger.price + state.ingredientPrices[action.ingredientName] : state.selectedBurger.price),

                }
            }

        case actionType.REMOVE_INGREDIENT:
            return {
                ...state,
                selectedBurger: {
                    ...state.selectedBurger,
                    extra: {
                        ...state.selectedBurger.extra,
                        [action.ingredientName]: state.selectedBurger.extra[action.ingredientName] - 1
                    },
                    price: (state.selectedBurger.extra[action.ingredientName] > 0 ? state.selectedBurger.price - state.ingredientPrices[action.ingredientName] : state.selectedBurger.price)
                }
            }


        case actionType.GET_MEAL:
            return {
                ...state,
                selectedBurger: {
                    ...state.selectedBurger,
                    name: state.selectedBurger.name + ' Meal',
                    price: state.selectedBurger.price + action.price,
                }
            }



        case actionType.REMOVE_MEAL:
            return {
                ...state,
                selectedBurger: {
                    ...state.selectedBurger,
                    name: state.selectedBurger.name.replace(" Meal", ""),
                    price: action.resetPrice || state.selectedBurger.price - action.price,
                    note: ''
                }
            }

        default:
            return state
    }
}


export default reducer