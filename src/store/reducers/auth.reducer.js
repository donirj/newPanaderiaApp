import { authTypes } from "../types";

const { SIGN_UP } = authTypes

const initialState = {
    token: null,
    userId: null
}

const authReducer = (state = initialState, action) => {
    //evalue segun el tipo de accion
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state,
                token: action.token,
                userId: action.userId
            }
        default:
            return state;
    }
}

export default authReducer