//importar productos
import { products } from "../../constants/data/products";

const initialState = {
    products: products,
    //filtramos los productos, dependiendo de la categoria que haga click
    //filtro un arrgelo de objetos
    filteredProducts: [],
    selected: null
}
//declaramos un reductor, recibe un estado que al ser declarado, retorne el estado inicial
const productsReducer = (state = initialState, action) => {
    return state;
}
//con esto ya tenemos nuestro reductor
export default productsReducer