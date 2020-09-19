import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/logo.png';

import './header.css';

const Header = () => {

    const openMenu = () => {
        document.querySelector('.submenu').classList.toggle('open')
    }
    return (
    <div>
        <div className='container-header'>
            <Link to='/' className='w-25'>
                <img src={Logo} min-width='60%' width='60%'/>
            </Link>
            
            <input type='text' placeholder='O que está procurando? :)'/>
            <button>
                <i className='fas fa-search text-info'></i>
            </button>
        <ul>
            <li>
            <button onClick={openMenu}>
                Categorias
            </button>
            </li>
            <li>
            <Link to='/carrinho/:id?'>
                <i className='fas fa-shopping-cart'></i>
            </Link>
            </li>
            
            <li>
            <Link to='/cart'>
                Login
            </Link>
            </li>
            <li>
            <Link to='/cart'>
            <i className="fas fa-user-cog"></i>
            </Link>
            </li>
        </ul>
        </div>

        <div className='submenu'>
            <ul>
                <li className='title-submenu'>
                <Link to='/camisetas-todos-os-itens'>
                    Camisetas / Camisas <i className="fas fa-tshirt"></i>
                </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Manga curta
                    </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Manga longa
                    </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Polo
                    </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Regata
                    </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Sem estampa
                    </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Xadrez
                    </Link>
                </li>
            </ul>

            <ul>
                <li className='title-submenu'>
                <Link to='/camisetas'>
                    Roupa social <i className="fas fa-user-tie"></i>
                </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Camisas
                    </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Paletó
                    </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Social / Manga comprida
                    </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Slim
                    </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Sem estampa
                    </Link>
                </li>
            </ul>
            
            <ul>
                <li className='title-submenu'>
                <Link to='/camisetas'>
                    Calça
                </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Moletom
                    </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Jeans
                    </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Skinny
                    </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Slim fit
                    </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Social
                    </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Sarja
                    </Link>
                </li>
            </ul>

            <ul>
                <li className='title-submenu'>
                <Link to='/camisetas'>
                    Bermuda
                </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Moletom
                    </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Sarja
                    </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Xadrez
                    </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Tectel
                    </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Para treino
                    </Link>
                </li>
            </ul>

            <ul>
                <li className='title-submenu'>
                <Link to='/camisetas'>
                    Roupa de frio
                </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Blusão
                    </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Jaqueta
                    </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Xadrez
                    </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Tectel
                    </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Para treino
                    </Link>
                </li>
            </ul>

            <ul>
                <li className='title-submenu'>
                <Link to='/camisetas'>
                    Calçado
                </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Chinelo
                    </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Tênis
                    </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Sapatenis
                    </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Sapato
                    </Link>
                </li>
            </ul>
            
            <ul>
                <li className='title-submenu'>
                <Link to='/camisetas'>
                    Acessórios
                </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Boné
                    </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Pulseira
                    </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Relógio
                    </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Meias
                    </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Colar
                    </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Brinco
                    </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Touca
                    </Link>
                </li>
                <li className='item-submenu'>
                    <Link to='/camisetas-polo'>
                        Outros
                    </Link>
                </li>
            </ul>
        </div>
    </div>
)};
    
export default Header;

