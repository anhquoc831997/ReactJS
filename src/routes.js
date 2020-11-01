import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductListApp from './pages/ProductListApp/ProductListApp';
import ThongTin from './pages/ThongTin/ThongTin';

import ThongTinTaiKhoan from './components/ThongTinTaiKhoang/ThongTinTaiKhoan';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
import App from './components/App';
import Home from './Home';
import Header  from './components/Header' ;
import Footer  from './components/Footer' ;
import News from './components/News' ;
import Contact from './components/Contact' ;
import About from './components/About' ;
import Details from './components/Details' ;
import newssingle from './components/newssingle' ;
import Listapp from './components/ListApp' ;
import Login from './pages/Login/Login' ;
import Signup from './pages/Signup/Signup' ;

import Logout from './components/Logout' ;
import New from './components/New' ;
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/product-list',
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path: '/app',
        exact: false,
        main: () => <div><Header /><ProductListApp /><Footer /></div>
    },

    {
        path: '/listapp/:id',
        exact: false,
        main: ({match}) => <Listapp match={match}/>
    },
    {
        path: '/home',
        exact: false,
        main: () => <Home />
    },
    {
        path: '/news',
        exact: false,
        main: () => <div><Header /><News /><Footer /></div>
    },
    {
        path: '/new/:id',
        exact: false,
        main: ({match}) => <New match={match}/>
    },   
    {
        path: '/contact',
        exact: false,
        main: () => <div><Header /><Contact /><Footer /></div>
    },   
    {
        path: '/about',
        exact: false,
        main: () => <div><Header /><About /><Footer /></div>
    },   
    {
        path: '/details/:id',
        exact: false,
        main: ({match}) => <Details match={match}/>
    },   
    {
        path: '/newssingle',
        exact: false,
        main: () => <newssingle />
    },   
    {
        path: '/login',
        exact: false,
        main: () => <Login />
    },
    {
        path: '/thongtin',
        exact: false,
        main: () => <ThongTin />
    },
    {
        path: '/thongtintaikhoan',
        exact: false,
        main: () => <ThongTinTaiKhoan />
    },
    {
        path: '/signup',
        exact: false,
        main: ({history}) => <Signup history={history}/>
    },      
    {
        path: '/logout',
        exact: false,
        main: () => <Logout />
    },   
    {
        path: '/product/add',
        exact: false,
        main: ({history}) => <ProductActionPage history={history}/>
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({match, history}) => <ProductActionPage match={match} history={history}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;