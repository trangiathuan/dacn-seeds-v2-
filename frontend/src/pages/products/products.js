import Footer from "../../component/footer/footer";
import Nav from "../../component/navbar/navbar";

import './products.css'

const Products = () => {
    return (
        <div className="products">
            <Nav />
            <div className='row'>

                <div className='col-3 col-category'>
                    <div className=' row row-category'>
                        <h4 className=''>DANH MỤC SẢN PHẨM</h4>
                        <a className='a-category mt-3'>
                            <img className='img-icon-product' src={require('../../asset/Images/plant.png')} />
                            Hạt Giống Cây Ăn Trái
                        </a>
                        <a className='a-category'>
                            <img className='img-icon-product' src={require('../../asset/Images/leaf.png')} />
                            Hạt Giống Rau Mầm
                        </a>
                        <a className='a-category'>
                            <img className='img-icon-product' src={require('../../asset/Images/willow.png')} />
                            Hạt Giống Dược Liệu
                        </a>
                        <a className='a-category'>
                            <img className='img-icon-product' src={require('../../asset/Images/golden-pothos.png')} />
                            Hạt Giống Cây Cảnh
                        </a>
                        <a className='a-category'>
                            <img className='img-icon-product' src={require('../../asset/Images/tomato.png')} />
                            Hạt Giống Rau, Củ, Quả
                        </a>
                        <a className='a-category'>
                            <img className='img-icon-product' src={require('../../asset/Images/leaf2.png')} />
                            Hạt Giống Rau Gia Vị
                        </a>
                        <a className='a-category'>
                            <img className='img-icon-product' src={require('../../asset/Images/flower.png')} />
                            Hạt Giống Hoa
                        </a>
                        <a className='a-category '>
                            <img className='img-icon-product' src={require('../../asset/Images/spider.png')} />
                            Hạt Giống Cỏ
                        </a>
                    </div>
                </div>
                <div className='col-9'>
                    <div className='row row-card-product'>
                        <div className='col-4 col-card-product'>
                            <div class="card">
                                <img className='card-img' src={require('../../asset/Images/category-thaoduoc.jpg')} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <div className='card-name mb-2' >
                                        <h5 class=" fw-bold ">Hạt giống cây hành siêu to</h5>
                                    </div>
                                    <h7>Số lượng:<h7 className='mb-1 card-sl'> 100</h7></h7>
                                    <h5>Giá:<h5 className='card-price'> 250,000 đ</h5>
                                        <img className='img-sale' src={require('../../asset/Images/hot-deal.png')} /> </h5>
                                    <div className='card-title'>
                                        <h6 className='mb-2'>Giao hàng siêu nhanh</h6>
                                    </div>
                                    <a href="#" class="btn btn-success btn-cart">Thêm vào giỏ hàng   </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 col-card-product'>
                            <div class="card">
                                <img className='card-img' src={require('../../asset/Images/category-thaoduoc.jpg')} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <div className='card-name mb-2' >
                                        <h5 class=" fw-bold ">Hạt giống cây hành siêu to</h5>
                                    </div>
                                    <h7>Số lượng:<h7 className='mb-1 card-sl'> 100</h7></h7>
                                    <h5>Giá:<h5 className='card-price'> 250,000 đ</h5>
                                        <img className='img-sale' src={require('../../asset/Images/hot-deal.png')} /> </h5>
                                    <div className='card-title'>
                                        <h6 className='mb-2'>Giao hàng siêu nhanh</h6>
                                    </div>
                                    <a href="#" class="btn btn-success btn-cart">Thêm vào giỏ hàng   </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 col-card-product'>
                            <div class="card">
                                <img className='card-img' src={require('../../asset/Images/category-thaoduoc.jpg')} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <div className='card-name mb-2' >
                                        <h5 class=" fw-bold ">Hạt giống cây hành siêu to</h5>
                                    </div>
                                    <h7>Số lượng:<h7 className='mb-1 card-sl'> 100</h7></h7>
                                    <h5>Giá:<h5 className='card-price'> 250,000 đ</h5>
                                        <img className='img-sale' src={require('../../asset/Images/hot-deal.png')} /> </h5>
                                    <div className='card-title'>
                                        <h6 className='mb-2'>Giao hàng siêu nhanh</h6>
                                    </div>
                                    <a href="#" class="btn btn-success btn-cart">Thêm vào giỏ hàng   </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 col-card-product'>
                            <div class="card">
                                <img className='card-img' src={require('../../asset/Images/category-thaoduoc.jpg')} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <div className='card-name mb-2' >
                                        <h5 class=" fw-bold ">Hạt giống cây hành siêu to</h5>
                                    </div>
                                    <h7>Số lượng:<h7 className='mb-1 card-sl'> 100</h7></h7>
                                    <h5>Giá:<h5 className='card-price'> 250,000 đ</h5>
                                        <img className='img-sale' src={require('../../asset/Images/hot-deal.png')} /> </h5>
                                    <div className='card-title'>
                                        <h6 className='mb-2'>Giao hàng siêu nhanh</h6>
                                    </div>
                                    <a href="#" class="btn btn-success btn-cart">Thêm vào giỏ hàng   </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 col-card-product'>
                            <div class="card">
                                <img className='card-img' src={require('../../asset/Images/category-thaoduoc.jpg')} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <div className='card-name mb-2' >
                                        <h5 class=" fw-bold ">Hạt giống cây hành siêu to</h5>
                                    </div>
                                    <h7>Số lượng:<h7 className='mb-1 card-sl'> 100</h7></h7>
                                    <h5>Giá:<h5 className='card-price'> 250,000 đ</h5>
                                        <img className='img-sale' src={require('../../asset/Images/hot-deal.png')} /> </h5>
                                    <div className='card-title'>
                                        <h6 className='mb-2'>Giao hàng siêu nhanh</h6>
                                    </div>
                                    <a href="#" class="btn btn-success btn-cart">Thêm vào giỏ hàng   </a>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
}
export default Products;