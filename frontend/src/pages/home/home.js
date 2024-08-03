import { Link } from "react-router-dom";
import Footer from "../../component/footer/footer";
import Nav from "../../component/navbar/navbar";

import './home.css';
const Home = () => {
    return (
        <div>

            <Nav />

            <div>
                <img className="home-banner" src={require('../../asset/Images/banner01.png')} />
            </div>


            <div>
                <div className="text-center mt-5">
                    <img className='icon-img' src={require('../../asset/Images/plant.png')} />
                    <span className='fs-4 fw-bold title-1'>Hạt giống chất lượng hàng đầu Việt Nam</span>
                    <img className='icon-img' src={require('../../asset/Images/plant.png')} />
                </div>
                <div className='title-2'>DANH MỤC SẢN PHẨM</div>
            </div>


            <div className='row mt-5'>
                <div className='col-2'></div>
                <div className='col-2'>
                    <a href='/products-category/66acff98b05c1a4960364fb9'>
                        <img className='img-category' src={require('../../asset/Images/category-traicay.jpg')} />
                        <p className='text-center title-category'>Hạt giống cây ăn trái</p>
                    </a>
                </div>
                <div className='col-2'>
                    <a href='/products-category/66acff98b05c1a4960364fba'>
                        <img className='img-category' src={require('../../asset/Images/category-raumamm.jpg')} />
                        <p className='text-center title-category'>Hạt giống rau mầm</p>
                    </a>
                </div>
                <div className='col-2'>
                    <a href='/products-category/66acff98b05c1a4960364fbb'>
                        <img className='img-category' src={require('../../asset/Images/category-thaoduoc.jpg')} />
                        <p className='text-center title-category'>Hạt giống thảo dược</p>
                    </a>
                </div>
                <div className='col-2'>
                    <a href='/products-category/66acff98b05c1a4960364fbc'>
                        <img className='img-category' src={require('../../asset/Images/category-caycanh.webp')} />
                        <p className='text-center title-category'>Hạt giống cây cảnh</p>
                    </a>
                </div>
                <div className='col-2'></div>
            </div>


            <div className='row'>
                <div className='col-2'></div>
                <div className='col-2'>
                    <a href='/products-category/66acff98b05c1a4960364fbd'>
                        <img className='img-category' src={require('../../asset/Images/category-raucu.jpg')} />
                        <p className='text-center title-category'>Hạt giống rau, củ, quả</p>
                    </a>
                </div>
                <div className='col-2'>
                    <a href='/products-category/66acff98b05c1a4960364fbe'>
                        <img className='img-category' src={require('../../asset/Images/category-giavi.jpg')} />
                        <p className='text-center title-category'>Hạt giống cây gia vị</p>
                    </a>
                </div>
                <div className='col-2'>
                    <a href='/products-category/66acff98b05c1a4960364fbf'>
                        <img className='img-category' src={require('../../asset/Images/category-hoa.jpg')} />
                        <p className='text-center title-category'>Hạt giống cây hoa</p>
                    </a>
                </div>
                <div className='col-2'>
                    <a href='/products-category/66acff98b05c1a4960364fc0'>
                        <img className='img-category' src={require('../../asset/Images/category-co.jpg')} />
                        <p className='text-center title-category'>Hạt giống cây cỏ</p>
                    </a>
                </div>
                <div className='col-2'></div>
            </div>


            <div>
                <div className="text-center mt-5">
                    <img className='icon-img' src={require('../../asset/Images/plant.png')} />
                    <span className='fs-4 fw-bold title-1'>Hạt giống chất lượng hàng đầu Việt Nam</span>
                    <img className='icon-img' src={require('../../asset/Images/plant.png')} />
                </div>
                <div className='title-2'>SẢN PHẨM NỔI BẬT</div>
            </div>


            <div className='row row-card'>
                <div className='col-3 col-card'>
                    <div class="card">
                        <img className='card-img' src={require('../../asset/Images/mnh.jpg')} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <div className='card-name mb-2' >
                                <h5 class=" fw-bold ">Mặt Nhăn Siêu Quậy</h5>
                            </div>
                            <h7>Số lượng:<h7 className='mb-1 card-sl'> 1</h7></h7>
                            <h5>Giá:<h5 className='card-price'> 25,000,000 đ</h5>
                                <img className='img-sale' src={require('../../asset/Images/hot-deal.png')} /> </h5>
                            <div className='card-title'>
                                <h6 className='mb-2'>Giao hàng siêu nhanh</h6>
                            </div>
                            <a href="#" class="btn btn-success btn-cart">Thêm vào giỏ hàng   </a>
                        </div>
                    </div>
                </div>
                <div className='col-3 col-card'>
                    <div class="card">
                        <img className='card-img' src={require('../../asset/Images/category-thaoduoc.jpg')} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <div className='card-name mb-2' >
                                <h5 class=" fw-bold ">Hạt giống cây hành siêu to</h5>
                            </div>
                            <h7>Số lượng:<h7 className='mb-1 card-sl'> 100</h7></h7>
                            <div>
                                <h5>Giá:<h5 className='card-price'> 250,000 đ</h5>
                                    <img className='img-sale' src={require('../../asset/Images/hot-deal.png')} /> </h5>
                            </div>
                            <div className='card-title'>
                                <h6 className='mb-2'>Giao hàng siêu nhanh</h6>
                            </div>
                            <a href="#" class="btn btn-success btn-cart">Thêm vào giỏ hàng   </a>
                        </div>
                    </div>
                </div>
                <div className='col-3 col-card'>
                    <div class="card">
                        <img className='card-img' src={require('../../asset/Images/category-thaoduoc.jpg')} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <div className='card-name mb-2' >
                                <h5 class=" fw-bold ">Hạt giống cây hành siêu to</h5>
                            </div>
                            <h7>Số lượng:<h7 className='mb-1 card-sl'> 100</h7></h7>
                            <div>
                                <h5>Giá:<h5 className='card-price'> 250,000 đ</h5>
                                    <img className='img-sale' src={require('../../asset/Images/hot-deal.png')} /> </h5>
                            </div>
                            <div className='card-title'>
                                <h6 className='mb-2'>Giao hàng siêu nhanh</h6>
                            </div>
                            <a href="#" class="btn btn-success btn-cart">Thêm vào giỏ hàng   </a>
                        </div>
                    </div>
                </div>
                <div className='col-3 col-card'>
                    <div class="card">
                        <img className='card-img' src={require('../../asset/Images/category-thaoduoc.jpg')} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <div className='card-name mb-2' >
                                <h5 class=" fw-bold ">Hạt giống cây hành siêu to</h5>
                            </div>
                            <h7>Số lượng:<h7 className='mb-1 card-sl'> 100</h7></h7>
                            <div>
                                <h5>Giá:<h5 className='card-price'> 250,000 đ</h5>
                                    <img className='img-sale' src={require('../../asset/Images/hot-deal.png')} /> </h5>
                            </div>
                            <div className='card-title'>
                                <h6 className='mb-2'>Giao hàng siêu nhanh</h6>
                            </div>
                            <a href="#" class="btn btn-success btn-cart">Thêm vào giỏ hàng   </a>
                        </div>
                    </div>
                </div>
                <div className='col-3 col-card'>
                    <div class="card">
                        <img className='card-img' src={require('../../asset/Images/category-thaoduoc.jpg')} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <div className='card-name mb-2' >
                                <h5 class=" fw-bold ">Hạt giống cây hành siêu to</h5>
                            </div>
                            <h7>Số lượng:<h7 className='mb-1 card-sl'> 100</h7></h7>
                            <div>
                                <h5>Giá:<h5 className='card-price'> 250,000 đ</h5>
                                    <img className='img-sale' src={require('../../asset/Images/hot-deal.png')} /> </h5>
                            </div>
                            <div className='card-title'>
                                <h6 className='mb-2'>Giao hàng siêu nhanh</h6>
                            </div>
                            <a href="#" class="btn btn-success btn-cart">Thêm vào giỏ hàng   </a>
                        </div>
                    </div>
                </div>
                <div className='col-3 col-card'>
                    <div class="card">
                        <img className='card-img' src={require('../../asset/Images/category-thaoduoc.jpg')} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <div className='card-name mb-2' >
                                <h5 class=" fw-bold ">Hạt giống cây hành siêu to</h5>
                            </div>
                            <h7>Số lượng:<h7 className='mb-1 card-sl'> 100</h7></h7>
                            <div>
                                <h5>Giá:<h5 className='card-price'> 250,000 đ</h5>
                                    <img className='img-sale' src={require('../../asset/Images/hot-deal.png')} /> </h5>
                            </div>
                            <div className='card-title'>
                                <h6 className='mb-2'>Giao hàng siêu nhanh</h6>
                            </div>
                            <a href="#" class="btn btn-success btn-cart">Thêm vào giỏ hàng   </a>
                        </div>
                    </div>
                </div>
                <div className='col-3 col-card'>
                    <div class="card">
                        <img className='card-img' src={require('../../asset/Images/category-thaoduoc.jpg')} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <div className='card-name mb-2' >
                                <h5 class=" fw-bold ">Hạt giống cây hành siêu to</h5>
                            </div>
                            <h7>Số lượng:<h7 className='mb-1 card-sl'> 100</h7></h7>
                            <div>
                                <h5>Giá:<h5 className='card-price'> 250,000 đ</h5>
                                    <img className='img-sale' src={require('../../asset/Images/hot-deal.png')} /> </h5>
                            </div>
                            <div className='card-title'>
                                <h6 className='mb-2'>Giao hàng siêu nhanh</h6>
                            </div>
                            <a href="#" class="btn btn-success btn-cart">Thêm vào giỏ hàng   </a>
                        </div>
                    </div>
                </div>
                <div className='col-3 col-card'>
                    <div class="card">
                        <img className='card-img' src={require('../../asset/Images/category-thaoduoc.jpg')} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <div className='card-name' >
                                <h5 class=" fw-bold ">Hạt giống cây hành siêu to</h5>
                            </div>
                            <h7>Số lượng:<h7 className='card-sl'> 100</h7></h7>
                            <div>
                                <h5>Giá:<h5 className='card-price'> đ</h5>
                                    <img className='img-sale' src={require('../../asset/Images/hot-deal.png')} /> </h5>
                            </div>
                            <div className='card-title'>
                                <h6 className='mb-2'>Giao hàng siêu nhanh</h6>
                            </div>
                            <a href="#" class="btn btn-success btn-cart">Thêm vào giỏ hàng   </a>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div >
    );
}
export default Home;