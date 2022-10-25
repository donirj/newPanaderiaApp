//inicializamos el store, importamos el combined redu er

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { productsReducer, categoryReducer, cartReducer, ordersReducer, authReducer } from "./reducers";

const rootReducer = combineReducers({
    //el store contiene 2 estados globales
    products: productsReducer,
    category: categoryReducer,
    cart: cartReducer,
    orders: ordersReducer,
    auth: authReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))