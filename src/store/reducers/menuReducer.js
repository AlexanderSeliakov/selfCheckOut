import * as actionType from '../actions/actionTypes'

const initState = {
    menu: null,
    // selectedBurger: null,
    // cart: [],
    // totalPrice: 0,
    // ingredientPrices: {  // can be defined with DB
    //     salad: 0.4,
    //     bacon: 0.9,
    //     cheese: 0.7,
    //     meat: 1,
    //     onions: 1,
    // },
    // ateria: [
    //     ['Coca-Cola', 'Fanta', 'Sprite'],
    //     ['French fries', 'Sweet potato']
    // ],
    errorMSG: null,
    // order: null
}

const reducer = (state = initState, action) => {
    switch (action.type) {

        case actionType.ERROR:
            return {
                ...state,
                errorMSG: action.error
            }


        case actionType.SHOW_MENU:
            const newMenu = [...action.menu]
            newMenu.map(el => el.amount = 1)
            return {
                ...state,
                menu: newMenu,
                errorMSG: null
            }

        default:
            return state
    }
}

export default reducer


        // case actionType.ADD_INGREDIENT:

        //     return {
        //         ...state,
        //         selectedBurger: {
        //             ...state.selectedBurger,
        //             extra: {
        //                 ...state.selectedBurger.extra,
        //                 [action.ingredientName]: state.selectedBurger.extra[action.ingredientName] + 1
        //             },
        //             price: (state.selectedBurger.extra[action.ingredientName] >= 0 ? state.selectedBurger.price + state.ingredientPrices[action.ingredientName] : state.selectedBurger.price),

        //         }
        //     }

        // case actionType.REMOVE_INGREDIENT:
        //     return {
        //         ...state,
        //         selectedBurger: {
        //             ...state.selectedBurger,
        //             extra: {
        //                 ...state.selectedBurger.extra,
        //                 [action.ingredientName]: state.selectedBurger.extra[action.ingredientName] - 1
        //             },
        //             price: (state.selectedBurger.extra[action.ingredientName] > 0 ? state.selectedBurger.price - state.ingredientPrices[action.ingredientName] : state.selectedBurger.price)
        //         }
        //     }


        // case actionType.GET_MEAL:
        //     return {
        //         ...state,
        //         selectedBurger: {
        //             ...state.selectedBurger,
        //             price: state.selectedBurger.price + action.price,
        //         }
        //     }



        // case actionType.REMOVE_MEAL:
        //     return {
        //         ...state,
        //         selectedBurger: {
        //             ...state.selectedBurger,
        //             price: action.resetPrice || state.selectedBurger.price - action.price,
        //             note: action.note
        //         }
        //     }


        // case actionType.SELECTED_BURGER:
        //     return {
        //         ...state,
        //         selectedBurger: {
        //             ...action.burger,
        //             extra: { ...extraIngredients }
        //         }
        //     }




        // case actionType.REDUCE_AMOUNT:
        //     let decreaseAmountInCart = [...state.cart]
        //     decreaseAmountInCart[action.index].amount = decreaseAmountInCart[action.index].amount - 1 > 0
        //         ? decreaseAmountInCart[action.index].amount - 1
        //         : decreaseAmountInCart.splice(action.index, 1)
        //     return {
        //         ...state,
        //         cart: [...decreaseAmountInCart],
        //         totalPrice: state.totalPrice >= 0 && state.totalPrice - action.item.price
        //     }



        // case actionType.INCREASE_AMOUNT:
        //     let increaseAmountInCart = [...state.cart]
        //     increaseAmountInCart[action.index].amount = increaseAmountInCart[action.index].amount + 1
        //     return {
        //         ...state,
        //         cart: [...increaseAmountInCart],
        //         totalPrice: state.totalPrice + action.item.price
        //     }


        // case actionType.ADD_TO_CART:
        //     let g = [...state.cart]
        //     let find = g.find(x => x.type !== 'burger' && x.id === action.item.id);
        //     if (find === undefined) {
        //         g.push(action.item)
        //     } else {
        //         console.log(find);
        //         g.map(el => el.id === find.id ? (el.amount = el.amount + 1) : el.amount);
        //     }

        //     return {
        //         ...state,
        //         cart: [...g],
        //         totalPrice: state.totalPrice + action.item.price
        //     }



        // case actionType.DELETE_FROM_CART:
        //     return {
        //         ...state,
        //         cart: state.cart.filter((_, index) => action.index !== index),
        //         totalPrice: state.totalPrice >= 0 && state.totalPrice - (action.burger.price * action.burger.amount)
        //     }

        // case actionType.CHECK_OUT:
        //     return {
        //         ...state,
        //         order: action.order,
        //         errorMSG: null
        //     }

        // case actionType.CLOSE_CHECK_OUT:
        //     if (!state.errorMSG) {
        //         return {
        //             ...state,
        //             cart: [],
        //             totalPrice: 0,
        //             selectedBurger: null,
        //             order: null,
        //             errorMSG: null
        //         }
        //     }







// switch (action.type) {

//     case actionType.ADD_INGREDIENT:

//         return {
//             ...state,
//             selectedBurger: {
//                 ...state.selectedBurger,

//                 // price: state.selectedBurger.price + prices[action.ingredientName],
//                 // ingredients: {
//                 //     ...state.selectedBurger.ingredients,
//                 //     [action.ingredientName]: state.selectedBurger.ingredients[action.ingredientName] + 1  // нужно ли?????
//                 // },

//                 // ingredients: {
//                 //     ...state.selectedBurger.ingredients,
//                 //     [action.ingredientName]: (state.selectedBurger.extra[action.ingredientName] < 0 ? state.selectedBurger.ingredients[action.ingredientName] + 1 : state.selectedBurger.ingredients[action.ingredientName])
//                 // },
//                 extra: {
//                     ...state.selectedBurger.extra,
//                     [action.ingredientName]: state.selectedBurger.extra[action.ingredientName] + 1
//                     // [action.ingredientName]: (state.selectedBurger.extra[action.ingredientName] === undefined ?  1 : state.selectedBurger.extra[action.ingredientName] + 1 )
//                 },
//                 // price: (state.selectedBurger.extra[action.ingredientName] >= 0 || state.selectedBurger.extra[action.ingredientName] === undefined ? state.selectedBurger.price + prices[action.ingredientName]:  state.selectedBurger.price),
//                 price: (state.selectedBurger.extra[action.ingredientName] >= 0 ? state.selectedBurger.price + state.ingredientPrices[action.ingredientName] : state.selectedBurger.price),

//             }
//         }

//     case actionType.REMOVE_INGREDIENT:
//         return {
//             ...state,
//             selectedBurger: {
//                 ...state.selectedBurger,
//                 price: (state.selectedBurger.extra[action.ingredientName] > 0 ? state.selectedBurger.price - state.ingredientPrices[action.ingredientName] : state.selectedBurger.price),
//                 // ingredients: {
//                 //     ...state.selectedBurger.ingredients,
//                 //     [action.ingredientName]: (state.selectedBurger.extra[action.ingredientName] <= 0 ? state.selectedBurger.ingredients[action.ingredientName] - 1 : state.selectedBurger.ingredients[action.ingredientName])
//                 // },
//                 extra: {
//                     ...state.selectedBurger.extra,
//                     [action.ingredientName]: state.selectedBurger.extra[action.ingredientName] - 1
//                 }
//             }
//         }


//     // case actionType.ADD_INGREDIENT:

//     //     return {
//     //         ...state,
//     //         selectedBurger: {
//     //             ...state.selectedBurger,
//     //             // ingredients: {
//     //             //     ...state.selectedBurger.ingredients,
//     //             //     [action.ingredientName]:  (state.selectedBurger.extra[action.ingredientName] < 0 ? state.selectedBurger.ingredients[action.ingredientName] + 1 : state.selectedBurger.ingredients[action.ingredientName] )
//     //             // },
//     //             extra: {
//     //                 ...state.selectedBurger.extra,
//     //                 [action.ingredientName]:  state.selectedBurger.extra[action.ingredientName] + 1 
//     //             },
//     //             price: (state.selectedBurger.extra[action.ingredientName] >= state.selectedBurger.ingredients[action.ingredientName] ? state.selectedBurger.price + prices[action.ingredientName]:  state.selectedBurger.price),

//     //         }
//     //     }

//     // case actionType.REMOVE_INGREDIENT:
//     //     return {
//     //         ...state,
//     //         selectedBurger: {
//     //             ...state.selectedBurger,
//     //             price: (state.selectedBurger.extra[action.ingredientName] > state.selectedBurger.ingredients[action.ingredientName] ? state.selectedBurger.price - prices[action.ingredientName]:  state.selectedBurger.price),
//     //             // ingredients: {
//     //             //     ...state.selectedBurger.ingredients,
//     //             //     [action.ingredientName]:  (state.selectedBurger.extra[action.ingredientName] <= 0 ? state.selectedBurger.ingredients[action.ingredientName] - 1 : state.selectedBurger.ingredients[action.ingredientName])
//     //             // },
//     //             extra: { //finalRecipe
//     //                 ...state.selectedBurger.extra,
//     //                 [action.ingredientName]: state.selectedBurger.extra[action.ingredientName] - 1 
//     //             }
//     //         }
//     //     }

//     case actionType.GET_MEAL:
//         return {
//             ...state,
//             selectedBurger: {
//                 ...state.selectedBurger,
//                 price: state.selectedBurger.price + action.price,
//                 note: state.selectedBurger.note ? state.selectedBurger.note.concat(', ' + action.note) : action.note
//             }
//             // totalPrice: state.totalPrice + action.price
//         }



//     case actionType.REMOVE_MEAL:
//         return {
//             ...state,
//             selectedBurger: {
//                 ...state.selectedBurger,
//                 price: action.resetPrice ? action.resetPrice : state.selectedBurger.price - action.price,
//                 note: action.note
//             }
//             // totalPrice: state.totalPrice + action.price
//         }










//     case actionType.SHOW_MENU:
//         return {
//             ...state,
//             menu: action.menu
//         }


//     case actionType.SELECTED_BURGER:
//         return {
//             ...state,
//             selectedBurger: {
//                 ...action.burger,
//                 extra: { ...extraIngredients }
//                 // extra: action.burger.extra ?  {...action.burger.extra} : {...action.burger.ingredients},
//                 // price: action.burger.price,
//                 // ateria: null
//             }
//         }


//     case actionType.ADD_TO_CART:
//         return {
//             ...state,
//             cart: state.cart.concat(action.item),
//             totalPrice: state.totalPrice + action.item.price
//         }

//     case actionType.DELETE_FROM_CART:
//         return {
//             ...state,
//             cart: state.cart.filter((_, index) => action.index !== index),
//             totalPrice: state.totalPrice >= 0 && state.totalPrice - action.burger.price
//         }


//     default:
//         return state
// }