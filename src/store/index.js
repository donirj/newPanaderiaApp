//inicializamos el store, importamos el combined redu er

import { createStore, combineReducers } from "redux";
import { productsReducer, categoryReducer } from "./reducers";

const rootReducer = combineReducers({
    //el store contiene 2 estados globales
    products: productsReducer,
    category: categoryReducer
})

export default createStore(rootReducer)