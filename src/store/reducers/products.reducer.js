//importar productos
import { products } from "../../constants/data/products";
import {  productsTypes } from '../types'
const { SELECTED_PRODUCT, FILTERED_PRODUCTS } = productsTypes

const initialState = {
    products: products,
    //filtramos los productos, dependiendo de la categoria que haga click
    //filtro un arrgelo de objetos
    filteredProducts: [],
    selected: null
}
//declaramos un reductor, recibe un estado que al ser declarado, retorne el estado inicial
const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_PRODUCT: 
            //retornamos copia del estado anterior
            return {
                ...state,
                selected: state.products.find(
                    (product) => product.id === action.productId
                )
            }
        case FILTERED_PRODUCTS:
            return {
                ...state,
                filteredProducts: state.products.filter(
                    (product) => product.categoryId === action.categoryId
                ),
            }
        default:
            return state;
    }
}
//con esto ya tenemos nuestro reductor
export default productsReducer