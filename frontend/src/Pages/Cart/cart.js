import React, { useEffect, useState } from 'react';
import PageDefault from '../PageDefault/pagedefault';
import {addToCart, removeFromCart} from '../../actions/cartActions';
import {useDispatch, useSelector} from 'react-redux';

import './cart.css';
import { Link } from 'react-router-dom';
const Cart = (props) => {
    const productId = props.match.params.id;
    const qtd = props.location.search? Number(props.location.search.split('=')[1]):1;
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart;
    const dispatch = useDispatch();
    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId))
    }
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qtd));
        }
    }, []);
    
    return (
        <PageDefault>
            <div className='cart'>
                <ul>
                        {
                            cartItems.length === 0 ? 
                            <div>O carrinho está vazio!</div>
                            :
                            cartItems.map(item => 
                                <li key={item._id} className='cart-item'>
                                    <img className='cart-image' src={item.image}/>
                                    <Link to={'/produto/' + item.product}>
                                        <h4 className='cart-name'>{item.name}</h4>
                                    </Link>
                                    <h4 className='cart-price'>{item.price}</h4>
                                    <small>Unidade</small>
                                    <input onChange={e => dispatch(addToCart(item.product, e.target.value))} className='cart-qtd' type='number' value={qtd}/>
                                    <h4 className='cart-price'>{(item.price*qtd).toFixed(2)}</h4>
                                    <button onClick={() => removeFromCartHandler(item.product)}>Remover</button>
                                </li>
                            )
                        }
                </ul>
 
            <div className='cart-actions col-4'>
                <h5>Subtotal ({cartItems.reduce((a, c) => a + c.qtd, 0)} itens)</h5>
                <h4>R$ {cartItems.reduce((a, c) => a + c.price*qtd, 0)}</h4>
                  <button disabled={cartItems.length === 0}>Finalizar compra</button>  
            </div>
        </div>
        </PageDefault>
    )
}

export default Cart;