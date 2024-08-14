import './productsAdmin.css'
import NavAdmin from "../component/nav-admin/nav-admin";
import Sidebar from "../component/sidebar/sidebar";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductsAdmin = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('No token found');
                }

                const response = await axios.get('http://localhost:8000/api/getAllProduct', {
                    headers: {
                        Authorization: `Bearer ${token}` // Sử dụng Bearer token
                    }
                });

                console.log('Fetched Products:', response.data); // Log dữ liệu sản phẩm để kiểm tra
                setProducts(response.data); // Cập nhật state với dữ liệu sản phẩm
            } catch (error) {
                setError(error.response ? error.response.data.msg : error.message); // Xử lý lỗi
            } finally {
                setLoading(false); // Tắt trạng thái loading
            }
        };

        fetchAllProducts(); // Gọi hàm fetch khi component được mount
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!products.length) {
        return <div>No products found.</div>;
    }

    return (
        <div>
            <NavAdmin />
            <div className="row productsAdmin-body">
                <div className="col-3 sidebar-body">
                    <Sidebar />
                </div>
                <div className="col-9">
                    <div>
                        <button className='btn btn-primary mt-3'>Thêm sản phẩm</button>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"> </th>
                                <th className='text-center' scope="col">Sản phẩm</th>
                                <th className='text-center'>Loại</th>
                                <th className='text-center' scope="col">Chi tiết</th>
                                <th className='text-center' scope="col">Số lượng</th>
                                <th className='text-center' scope="col">Giá bán</th>
                                <th className='text-center' scope="col">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (

                                <tr key={product._id}>
                                    <th>
                                        <img className='img-product-admin' src={require(`../../asset/images-product/${product.image}`)} />
                                    </th>
                                    <td className='name-product'>{product.productName}</td>
                                    <td>{product.categoryId}</td>
                                    <td className='description-product'>{product.description}</td>
                                    <td className='quantity-product'>{product.quantity}</td>
                                    <td className='price-product'>{product.price}</td>
                                    <td>
                                        <button className='btn btn-success btn-product'>Cập nhật</button>
                                        <button className='btn btn-danger btn-product'>Xóa</button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}
export default ProductsAdmin;
