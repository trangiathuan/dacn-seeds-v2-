import './product_detail.css'
import Footer from "../../component/footer/footer";
import Nav from "../../component/navbar/navbar";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const [product, setProduct] = useState(null);  // Khởi tạo product là null để dễ kiểm tra
    const [loading, setLoading] = useState(true);  // Thêm trạng thái loading
    const { id } = useParams();

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

    const addToCart = () => {
        const isLoggedIn = !!localStorage.getItem('token');
        if (isLoggedIn) {
            addToCartDatabase(product);
        } else {
            alert("Đăng nhập để thêm sản phẩm vào giỏ hàng")
        }
    };

    const addToCartDatabase = async (product) => {
        try {
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:8000/api/cart', {
                productName: product.productName,
                image: product.image,
                price: product.price,
                quantity: 1  // Giả sử số lượng mặc định là 1
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            alert("Sản phẩm đã được thêm vào giỏ hàng");
        } catch (err) {
            console.error(err);
            alert("Có lỗi xảy ra, vui lòng thử lại");
        }
    };


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
                            <p className='text-1'>Giao hàng toàn quốc -  thanh toán khi nhận hàng</p>
                            <p className='price'>Giá bán:<span className='text-2'> {product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span> </p>
                            <p className='quantity'>Số lượng trong kho:<span className='text-3'> 100</span> </p>
                            <p className='description'>Chi tiết: <span className='text-4'> {product.description}</span> </p>
                            <button onClick={addToCart} className="btn btn-success btn-cart-detail">Thêm vào giỏ hàng</button>
                        </div>
                    </div>
                </div>
                <div className='comment-detail'>
                    <div className='content-comment'>
                        <h3 className='mb-4'>NỘI DUNG BÌNH LUẬN</h3>
                        <div className='row'>
                            <div className='col-2 avt'>
                                <img className='img-avt' src={require('../../asset/Images/plant.png')} alt="avatar" />
                            </div>
                            <div className='commnet-text col-8'>
                                <p className='name-user'>Trần Gia Thuận <span className='date-comment'>2/8/2024</span></p>
                                <p>Shop mình có bán Nguyên Giang không. Mình muốn mua Nguyên Giang về ôm ngủ ạ</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-2 avt'>
                                <img className='img-avt' src={require('../../asset/Images/plant.png')} alt="avatar" />
                            </div>
                            <div className='commnet-text col-8'>
                                <p className='name-user'>Trần Gia Thuận <span className='date-comment'>2/8/2024</span></p>
                                <p>Yêu Nguyên Giang quá đi thoyyyyyy</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-2 avt'>
                                <img className='img-avt' src={require('../../asset/Images/plant.png')} alt="avatar" />
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
