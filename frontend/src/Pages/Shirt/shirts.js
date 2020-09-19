import React, { useEffect } from 'react';
import {listProducts} from '../../actions/productActions';
import {Link} from 'react-router-dom';
import PageDefault from '../PageDefault/pagedefault';

import './shirts.css';
import { useDispatch, useSelector } from 'react-redux';

function Shirts (props) {
        
    const productList = useSelector(state => state.productList);
    const {products, loading, error} = productList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducts());
        return () => {
            //
        };
    }, []);
    const isUnavailable = (params) => {
        if (params === 0)
        return alert('INDISP')
    }
return loading? <div>Carregando</div> :
error? <div>{error}</div> :
<PageDefault>
    <div className='container-shirts'>
        {
        products.map(product => 
            <div onLoadStart={isUnavailable(product.countInStock)} key={product._id}>
            <Link to={`/produto/${product._id}`}>
            <div className='item-shirts'>
                <div className='product-image'>
                    <img width='60%' src={product.image} />
                </div>
                <h6 className='product-name'>{product.name}</h6>
                <h6 className='product-rating'>{product.rating}</h6>
                <small className='product-description'>{product.description}</small>
                <h6 className='product-price'>R$ {product.price}</h6>
                <small className='product-num-reviews'>{product.numReviews} opiniões</small>
            </div>
            </Link>
            </div>
            )

                    }
    </div>
</PageDefault>
}
export default Shirts;