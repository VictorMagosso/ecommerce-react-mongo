import React, { useEffect, useState } from 'react';
import { detailsProduct } from '../../actions/productActions';
import PageDefault from '../PageDefault/pagedefault';
import SizeShirts from '../../Components/Sizes/Shirts/sizeShirts';

import './productScreen.css';
import './itemSelect.css';
import { useDispatch, useSelector } from 'react-redux';

function ProductScreen(props) {
    const productDetails = useSelector((state) => state.productDetails);
    const { product, loading, error } = productDetails;
    // const product = data.products.find(x => x._id === props.match.params.id)
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            //
        };    
    }, []);
    const [qtd, setQtd] = useState(1);
    const handleAddToCart = () => {
        props.history.push('/carrinho/' + props.match.params.id + '?qtd=' + qtd)
    }
    
    return loading? <div>Carregando</div> : 
    error? <div>{error}</div> :
    <PageDefault>
        <div className='container-product-item row'>
        <div className='col-5'>
            <img src={product.image} width='100%'/>
        </div>
        <div className='col-7'>
            <h1 className='product-name-open'>{product.name}</h1>
            <h2 className='product-price-open'>R$ {product.price}</h2>
            <h3 className='product-rating-open'>{product.rating}</h3>
            <h4 className='product-description-open'>{product.description}</h4>
            <SizeShirts/>
            <div className='item-select'>
            <h5>Quantidade:</h5>
            <input value={qtd} onChange={e => {setQtd(e.target.value)}} min='0' max='8' type="number"/>
            <div className='add-to-cart'>
            <button onClick={handleAddToCart}>Adicionar ao carrinho
                <i className='fas fa-shopping-cart'></i>
            </button> 
        </div>                          
       </div>
        </div>
    </div>            
</PageDefault>
}

export default ProductScreen;