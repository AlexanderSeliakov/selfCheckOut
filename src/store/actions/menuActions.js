import * as actionType from './actionTypes'
import axios from '../../axios'


export const showMenu = (menu) => {
    return {
        type: actionType.SHOW_MENU,
        menu: menu
    }
}

export const errorMSG = (err) => {
    return {
        type: actionType.ERROR,
        error: err
    }
}


export const setMenu = (menu_section) => {
    return dispatch => {
        axios.get(`${menu_section}.json`)
            .then(res => {
                dispatch(showMenu(res.data))
            })
            .catch(err => {
                console.log(err);
                dispatch(errorMSG(err.message))
            })
    }
}