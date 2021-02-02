import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";

const SET_USER_DATA = 'ADD-POST';
let initialState = {
    initialized: false,
};
const SET_INITIALIZED = 'SET_INITIALIZED';
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'
export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
                isAuth: true
            }
        default:
            return state;
    }

}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })

}



