import './product_detail.css'
import Footer from "../../component/footer/footer";
import Nav from "../../component/navbar/navbar";

const ProductDetail = () => {
    return (
        <div>
            <Nav />
            <div className='product-detail-body'>
                <div className='product-detail'>
                    <div className='row'>
                        <div className='col-6'>
                            <img className='img-product' src={require('../../asset/images-product/h01.jpg')} />
                        </div>
                        <div className='col-6 content-detail'>
                            <h3>Hạt giống hoa hướng dưong</h3>
                            <p>Giao hàng nhanh toàn quốc -  thanh toán khi nhận hàng</p>
                            <p>Giá bán: 25,000đ</p>
                            <p>Số lượng trong kho: 100</p>
                            <p>Chi tiết: Hạt giống hoa hướng dưongHạt giống hoa hướng dưongHạt giống hoa hướng dưongHạt giống hoa hướng dưongHạt giống hoa hướng dưongHạt giống hoa hướng dưongHạt giống hoa hướng dưongHạt giống hoa hướng dưongHạt giống hoa hướng dưongHạt giống hoa hướng dưongHạt giống hoa hướng dưong</p>
                            <a href="#" class="btn btn-success btn-cart">Thêm vào giỏ hàng   </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default ProductDetail;