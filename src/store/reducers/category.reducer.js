import { categories } from "../../constants/data/categories";
import { categoryTypes } from '../types';

const { SELECT_CATEGORY } = categoryTypes;
//estado inicial del reductor
const initialState = {
    categories: categories,
    //saber que categoria fue seleccionada
    selected: null
}
//declarar el reductor
//va recibir un estado que inicialmente es el de arriba
//el segundo parametro es una accion, dependiendo de la accion, se harán los cambios en el estado

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CATEGORY:
            const indexCategory = state.categories.findIndex(
                (category) => category.id === action.categoryId
            );
            if(indexCategory === -1) return state;
            return {
                ...state,
                selected: state.categories[indexCategory]
            }
        default:
            return state;
    }
}

export default categoryReducer
