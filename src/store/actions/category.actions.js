import { categoryTypes } from "../types"

const { SELECTED_CATEGORY } = categoryTypes

//exportamos accion
export const selectCategory = (id) =>({
    type: SELECTED_CATEGORY,
    categoryId: IDBCursor
})
