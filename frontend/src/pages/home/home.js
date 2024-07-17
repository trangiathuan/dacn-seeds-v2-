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
                    <a href='#'>
                        <img className='img-category' src={require('../../asset/Images/category-traicay.jpg')} />
                        <p className='text-center title-category'>Hạt giống cây ăn trái</p>
                    </a>
                </div>
                <div className='col-2'>
                    <a href='#'>
                        <img className='img-category' src={require('../../asset/Images/category-raumamm.jpg')} />
                        <p className='text-center title-category'>Hạt giống rau mầm</p>
                    </a>
                </div>
                <div className='col-2'>
                    <a href='#'>
                        <img className='img-category' src={require('../../asset/Images/category-thaoduoc.jpg')} />
                        <p className='text-center title-category'>Hạt giống thảo dược</p>
                    </a>
                </div>
                <div className='col-2'>
                    <a href='#'>
                        <img className='img-category' src={require('../../asset/Images/category-caycanh.webp')} />
                        <p className='text-center title-category'>Hạt giống cây cảnh</p>
                    </a>
                </div>
                <div className='col-2'></div>
            </div>


            <div className='row'>
                <div className='col-2'></div>
                <div className='col-2'>
                    <a href='#'>
                        <img className='img-category' src={require('../../asset/Images/category-raucu.jpg')} />
                        <p className='text-center title-category'>Hạt giống rau, củ, quả</p>
                    </a>
                </div>
                <div className='col-2'>
                    <a href='#'>
                        <img className='img-category' src={require('../../asset/Images/category-giavi.jpg')} />
                        <p className='text-center title-category'>Hạt giống cây gia vị</p>
                    </a>
                </div>
                <div className='col-2'>
                    <a href='#'>
                        <img className='img-category' src={require('../../asset/Images/category-hoa.jpg')} />
                        <p className='text-center title-category'>Hạt giống cây hoa</p>
                    </a>
                </div>
                <div className='col-2'>
                    <a href='#'>
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
                        <img src={require('../../asset/Images/category-thaoduoc.jpg')} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Hạt giống cây hành lá</h5>
                            <p class="card-text">Some quick example text to build on the Hạt giống cây </p>
                            <h4>250000</h4>
                            <a href="#" class="btn btn-success ">Thêm vào giỏ hàng   </a>
                        </div>
                    </div>
                </div>
                <div className='col-3 col-card'>
                    <div class="card">
                        <img src={require('../../asset/Images/category-thaoduoc.jpg')} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Hạt giống cây hành lá</h5>
                            <p class="card-text">Some quick example text to build on the Hạt giống cây </p>
                            <h4>250000</h4>
                            <a href="#" class="btn btn-success ">Thêm vào giỏ hàng   </a>
                        </div>
                    </div>
                </div>
                <div className='col-3 col-card'>
                    <div class="card">
                        <img src={require('../../asset/Images/category-thaoduoc.jpg')} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Hạt giống cây hành lá</h5>
                            <p class="card-text">Some quick example text to build on the Hạt giống cây </p>
                            <h4>250000</h4>
                            <a href="#" class="btn btn-success ">Thêm vào giỏ hàng   </a>
                        </div>
                    </div>
                </div>
                <div className='col-3 col-card'>
                    <div class="card">
                        <img src={require('../../asset/Images/category-thaoduoc.jpg')} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Hạt giống cây hành lá</h5>
                            <p class="card-text">Some quick example text to build on the Hạt giống cây </p>
                            <h4>250000</h4>
                            <a href="#" class="btn btn-success ">Thêm vào giỏ hàng   </a>
                        </div>
                    </div>
                </div>
                <div className='col-3 col-card'>
                    <div class="card">
                        <img src={require('../../asset/Images/category-thaoduoc.jpg')} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Hạt giống cây hành lá</h5>
                            <p class="card-text">Some quick example text to build on the Hạt giống cây </p>
                            <h4>250000</h4>
                            <a href="#" class="btn btn-success ">Thêm vào giỏ hàng   </a>
                        </div>
                    </div>
                </div>
                <div className='col-3 col-card'>
                    <div class="card">
                        <img src={require('../../asset/Images/category-thaoduoc.jpg')} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Hạt giống cây hành lá</h5>
                            <p class="card-text">Some quick example text to build on the Hạt giống cây </p>
                            <h4>250000</h4>
                            <a href="#" class="btn btn-success ">Thêm vào giỏ hàng   </a>
                        </div>
                    </div>
                </div>
                <div className='col-3 col-card'>
                    <div class="card">
                        <img src={require('../../asset/Images/category-thaoduoc.jpg')} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Hạt giống cây hành lá</h5>
                            <p class="card-text">Some quick example text to build on the Hạt giống cây </p>
                            <h4>250000</h4>
                            <a href="#" class="btn btn-success ">Thêm vào giỏ hàng   </a>
                        </div>
                    </div>
                </div>
                <div className='col-3 col-card'>
                    <div class="card">
                        <img src={require('../../asset/Images/category-thaoduoc.jpg')} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Hạt giống cây hành lá</h5>
                            <p class="card-text">Some quick example text to build on the Hạt giống cây </p>
                            <h4>250000</h4>
                            <a href="#" class="btn btn-success ">Thêm vào giỏ hàng   </a>
                        </div>
                    </div>
                </div>
                <div className='col-3 col-card'>
                    <div class="card">
                        <img src={require('../../asset/Images/category-thaoduoc.jpg')} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Hạt giống cây hành lá</h5>
                            <p class="card-text">Some quick example text to build on the Hạt giống cây </p>
                            <h4>250000</h4>
                            <a href="#" class="btn btn-success ">Thêm vào giỏ hàng   </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Home;