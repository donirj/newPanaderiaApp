
import { cartTypes } from "../types"
const { ADD_TO_CART, CONFIRM_ORDER, REMOVE_FROM_CART } = cartTypes;

const initialState = {
    //acción para poder elementos al carrito, está vacio
    items: [],
    total: 0,
}

//estos items que yo recibo, el precio del item se multiplica por la cantidad
const sumTotal = (items) => items?.map(item => item.price * item.quantity)?.reduce((a,b) => a+b, 0)


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        //en caso de ser add to cart
        case ADD_TO_CART:
            //inicialmente vacio
            let updatedCart = [];
            //si en el estado estos items, si existe el item dentro del carrito
            if(state.items.find(item => item.id === action.item.id)) {
                //actualizar carrito, recorrer elementos
                updatedCart = state.items.map(item => {
                    //si el id es igual al id que se pasa por la acción, le sumamos la cantidad de 1
                    if(item.id === action.item.id) item.quantity += 1;
                    //retornamos item
                    return item;
                });
                //en caso de no existir
            } else {
                //añadimos un item
                const item = {...action.item, quantity: 1};
                updatedCart = [...state.items, item];
            }
            return {
                //retornamos copia del estado anterior
                ...state,
                items: updatedCart,
                //sumtotal recibe todo el carrito
                total: sumTotal(updatedCart)
            }
        case REMOVE_FROM_CART:
            //estado inicial del carrito, le hacemos un filter y queremos que retorne los items diferentes al item que eliminamos
            const filteredCart = state.items.filter(item => item.id !== action.id);
            return {
                ...state,
                items: filteredCart,
                total: sumTotal(filteredCart)
            }
        default:
            //default que el carrito está vacío
            return state;
    }
}


export default cartReducer