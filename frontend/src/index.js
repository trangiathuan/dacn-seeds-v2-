import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//import pages
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/login/register';
import Products from './pages/products/products';
import ProductDetail from './pages/product-detail/product_detail';
import ProductsCategory from './pages/product-category/products-category';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product-detail/:id' element={<ProductDetail />} />
        <Route path='/products-category/:id' element={<ProductsCategory />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
