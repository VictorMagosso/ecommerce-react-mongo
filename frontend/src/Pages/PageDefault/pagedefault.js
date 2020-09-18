import React from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';

const PageDefault = (props) => (
    <div>
    <Header/>
    {props.children}
    <Footer/>
    </div>
);

export default PageDefault;