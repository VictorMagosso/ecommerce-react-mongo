import {
    CART_ADD_ITEM, CART_REMOVE_ITEM
} from "../constants/cartConstants";
import Axios from 'axios';
import Cookie from 'js-cookie';

export const addToCart = (productId, qtd) => async (dispatch, getState) => {
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
                qtd
            }
        });
        const {cart:{cartItems}} = getState();
        Cookie.get('cartItems', JSON.stringify(cartItems));

    } catch (error) {}
}
export const removeFromCart = (productId) => async (dispatch, getState) => {
   dispatch({type: CART_REMOVE_ITEM, payload: productId})
}