import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import pages
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/login/register';
import Products from './pages/products/products';
import ProductDetail from './pages/product-detail/product_detail';
import ProductsCategory from './pages/product-category/products-category';
import Cart from './pages/cart/cart';
import Checkout from './pages/checkout/checkout';

// import admin pages
import Dashboard from './admin/dashboard/dashboard';
import ProductsAdmin from './admin/products/productsAdmin';

// import ProductList from './pages/admin/productList';

// // import ProtectedRoute component
// import ProtectedRoute from './components/ProtectedRoute';

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
        <Route path='/cart' element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/products" element={<ProductsAdmin />} />


        {/* <ProtectedRoute path='/admin/dashboard' element={<Dashboard />} />
        <ProtectedRoute path='/admin/products' element={<ProductList />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
