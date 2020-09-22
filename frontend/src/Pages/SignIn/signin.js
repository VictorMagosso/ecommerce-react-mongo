import React, { useEffect, useState } from 'react';
import PageDefault from '../PageDefault/pagedefault';

import './signin.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const SignIn = () => {
    const productDetails = useSelector((state) => state.productDetails);
    const { product, loading, error } = productDetails;
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        return () => {
            //
        };    
    }, []);
    
    return (
        <PageDefault>
            <div>
                <form onSubmit={submitHandler}>
                    <ul className='form-container'>
                        <li>
                            <label for='email'>
                                E-mail
                            </label>
                        </li>
                    <input type='email' name='email' id='email' onChange={e => setEmail(e.target.value)}/>
                        <li>
                            <label for='password'>
                                Senha
                            </label>
                        </li>
                    <input type='password' name='password' id='password' onChange={e => setPassword(e.target.value)}/>
                    <li>
                        <button type='submit'>Entrar!</button>
                    </li>
                    <li>
                        <Link to='/criar-nova-conta'>Não tenho uma conta...</Link>
                    </li>
                    </ul>
                </form>
            </div>
        </PageDefault>

    )
}

export default SignIn;