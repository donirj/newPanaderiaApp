import React, { useEffect } from "react"
import { View, Text, Button, FlatList } from "react-native"
import { styles } from "./styles"
import { products } from '../../constants/data'
import { ProductItem } from "../../components"
import { useSelector, useDispatch } from "react-redux"
import { filteredProducts, selectedProduct } from "../../store/actions"

const Products = ({ navigation }) => {
    const selectedCategory = useSelector((state) => state.category.selected)

    console.warn('selectedCategory', selectedCategory)
    const productsFiltered = products.filter(product => product.categoryId === selectedCategory.id)

    const onSelected = (item) => {
//        dispatch(selectedProduct(item.id))
        navigation.navigate('Product', { name: item.title, productId: item.id})
    }
    const renderItem = ({ item }) => <ProductItem item={item} onSelected={onSelected}/>
    
    return (
        <FlatList
            data={productsFiltered}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
    )
}

export default Products