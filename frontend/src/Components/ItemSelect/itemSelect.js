import React from 'react';

import './itemSelect.css';

export default function ItemSelect () {
    return (
        <div className='item-select'>
            <h5>Quantidade:</h5>
        <input min='0' type="number"/>
        <div className='add-to-cart'>
            <a href='#'>Adicionar ao carrinho
                <i className='fas fa-shopping-cart'></i>
            </a> 
        </div>                          
       </div>
    )
}