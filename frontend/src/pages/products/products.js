import Footer from "../../component/footer/footer";
import Nav from "../../component/navbar/navbar";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

import './products.css'

const Products = () => {

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/product')
            .then(res => {
                setProducts(res.data);
            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
            });

        axios.get('http://localhost:8000/category')
            .then(res => {
                setCategory(res.data);
            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
            });
    }, []);

    return (
        <div className="products">
            <Nav />
            <div className='row'>

                <div className='col-3 col-category'>
                    <div className=' row row-category'>
                        <h4 className=''>DANH MỤC SẢN PHẨM</h4>
                        {category.map((item) => (
                            <Link to={`/products-category/${item._id}`} key={item._id} className='a-category mt-3'>
                                <img className='img-icon-product' src={require(`../../asset/Images/${item.categoryIcon}`)} />
                                {item.categoryName}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='col-9'>
                    <div className='row row-card-product'>
                        {products.map((item) => (
                            <div key={item._id} className='col-4 col-card-product'>
                                <Link to={`/product-detail/${item._id}`}>
                                    <div class="card">
                                        <img className='card-img' src={require(`../../asset/images-product/${item.image}`)} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <div className='card-name mb-2' >
                                                <p class=" fw-bold ">{item.productName}</p>
                                            </div>
                                            <h7>Số lượng:<h7 className='mb-1 card-sl'> {item.quantity}</h7></h7>
                                            <h5>Giá:<h5 className='card-price'> {item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h5>
                                                <img className='img-sale' src={require('../../asset/Images/hot-deal.png')} /> </h5>
                                            <div className='card-title'>
                                                <h6 className='mb-2'>Giao hàng siêu nhanh</h6>
                                            </div>
                                            <a href="#" class="btn btn-success btn-cart">Thêm vào giỏ hàng   </a>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
}
export default Products;