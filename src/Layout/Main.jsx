import React from 'react';
import Header from '../Pages/Public/Header';
import { Outlet }from 'react-router-dom';
import Footer from '../Pages/Public/Footer';



const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;