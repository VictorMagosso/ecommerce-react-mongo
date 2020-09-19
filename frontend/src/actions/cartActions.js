import {
    CART_ADD_ITEM, CART_REMOVE_ITEM
} from "../constants/cartConstants";

const {
    default: Axios
} = require("axios")

export const addToCart = (productId, qtd) => async (dispatch) => {
    try {
        const {
            data
        } = await Axios.get('/api/products/' + productId);
        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                productId: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qtd
            }
        })
    } catch (error) {}
}
export const removeFromCart = (productId) => async (dispatch) => {
   dispatch({type: CART_REMOVE_ITEM, payload: productId})
}