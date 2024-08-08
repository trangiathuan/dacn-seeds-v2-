// src/pages/product-detail/product_detail.js
import './product_detail.css';
import Footer from "../../component/footer/footer";
import Nav from "../../component/navbar/navbar";
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const [product, setProduct] = useState(null);  // Khởi tạo product là null để dễ kiểm tra
    const [loading, setLoading] = useState(true);  // Thêm trạng thái loading
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);  // Sử dụng CartContext

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/product-detail/${id}`);
                setProduct(res.data);
                setLoading(false);  // Đặt loading thành false khi dữ liệu được tải
            } catch (err) {
                console.log(err);
                setLoading(false);  // Đặt loading thành false ngay cả khi có lỗi
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;  // Hiển thị loading trong khi đợi dữ liệu
    }

    return (
        <div>
            <Nav />
            <div className='product-detail-body'>
                <div className='product-detail'>
                    <div className='row'>
                        <div className='col-6'>
                            <img className='img-product' src={require(`../../asset/images-product/${product.image}`)} alt={product.productName} />
                        </div>
                        <div className='col-6 content-detail'>
                            <h3>{product.productName}</h3>
                            <p className='text-1'>Giao hàng toàn quốc - thanh toán khi nhận hàng</p>
                            <p className='price'>Giá bán:<span className='text-2'> {product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span> </p>
                            <p className='quantity'>Số lượng trong kho:<span className='text-3'> 100</span> </p>
                            <p className='description'>Chi tiết: <span className='text-4'> {product.description}</span> </p>
                            <button className="btn btn-success btn-cart-detail" onClick={() => addToCart({ ...product, quantity: 1 })}>Thêm vào giỏ hàng</button>
                        </div>
                    </div>
                </div>
                <div className='comment-detail'>
                    <div className='content-comment'>
                        <h3 className='mb-4'>NỘI DUNG BÌNH LUẬN</h3>
                        <div className='row'>
                            <div className='col-2 avt'>
                                <img className='img-avt' src={require('../../asset/Images/plant.png')} alt="Avatar" />
                            </div>
                            <div className='commnet-text col-8'>
                                <p className='name-user'>Trần Gia Thuận <span className='date-comment'>2/8/2024</span></p>
                                <p>Shop mình có bán Nguyên Giang không. Mình muốn mua Nguyên Giang về ôm ngủ ạ</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-2 avt'>
                                <img className='img-avt' src={require('../../asset/Images/plant.png')} alt="Avatar" />
                            </div>
                            <div className='commnet-text col-8'>
                                <p className='name-user'>Trần Gia Thuận <span className='date-comment'>2/8/2024</span></p>
                                <p>Yêu Nguyên Giang quá đi thoyyyyyy</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-2 avt'>
                                <img className='img-avt' src={require('../../asset/Images/plant.png')} alt="Avatar" />
                            </div>
                            <div className='commnet-text col-8'>
                                <p className='name-user'>Trần Gia Thuận <span className='date-comment'>2/8/2024</span></p>
                                <p>Chàng trai bị bỏng từ năm 6 tháng tuổi mà chúng ta cảm mến chính là chủ của tiệm bánh Hướng Dương ở TP.HCM: "Hồi xưa mình nghĩ, mình sẽ mở tiệm bánh để bán bánh cho tất cả mọi người, không phân biệt g.iàu n.ghèo, k.huyết t.ật hay lành lặn. Mình làm được rồi” - Ngô Quý Hải tâm sự </p>
                            </div>
                        </div>
                        <div className='box-comment'>
                            <h3 className='mb-4'>BÌNH LUẬN</h3>
                            <textarea className='input-comment' type='text' />
                            <button className='btn btn-primary btn-commnet'>Bình luận</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetail;
