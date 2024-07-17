import './navbar.css'
const Nav = () => {
    return (
        <div className='nav-all  '>
            <div className='row'>
                <div className='col-1'>

                </div>
                <div className='col-2'>
                    <img class='logo' src={require("../../asset/Images/Logo.png")} />
                </div>
                <div className='col-5'>
                    <div class="input-group mt-3 mb-3 nav-search">
                        <input type="text" class="form-control" placeholder="Bạn muốn tìm hạt giống gì" />
                        <button class="btn btn-outline-secondary btn-search" type="button" id="button-addon2">Tìm kiếm</button>
                    </div>
                </div>
                <div className='col-1'>

                </div>
                <div className='col-1 mt-2 mb-3 a-cart '>
                    <button className='btn btn-nav' href='#'>
                        <img className='cart' src={require('../../asset/Images/cart.png')} />
                    </button>
                    <span>  Giỏ hàng</span>
                </div>
                <div className='col-1 mt-2 mb-3'>
                    <button className='btn btn-nav'>
                        <img className='cart' src={require('../../asset/Images/user.png')} />
                    </button>
                </div>
            </div>
            <div className='sticky-sm-top'>
                <nav className="navbar navbar-expand-lg nav-bg ">
                    {/* Menu dropdown */}
                    <div class="dropdown ps-5">
                        <a class="btn dropdown nav-a" href="#" role="button" id="dropdownMenuLink">
                            <img className='icon-menu' src={require('../../asset/Images/menu.png')} /> DANH MỤC SẢN PHẨM
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <div className='row'>
                                <div className='col-4'>
                                    <a class="dropdown-item" href="#">
                                        <img className='img-icon' src={require('../../asset/Images/plant.png')} />
                                        Hạt Giống Cây Ăn Trái</a>
                                    <a class="dropdown-item" href="#">
                                        <img className='img-icon' src={require('../../asset/Images/leaf.png')} />
                                        Hạt Giống Rau Mầm</a>
                                    <a class="dropdown-item" href="#">
                                        <img className='img-icon' src={require('../../asset/Images/willow.png')} />
                                        Hạt Giống Cây Dược Liệu</a>
                                    <a class="dropdown-item" href="#">
                                        <img className='img-icon' src={require('../../asset/Images/golden-pothos.png')} />
                                        Hạt Giống Cây Cảnh</a>
                                </div>
                                <div className='col-4'>
                                    <a class="dropdown-item" href="#">
                                        <img className='img-icon' src={require('../../asset/Images/tomato.png')} />
                                        Hạt Giống Rau, Củ, Quả</a>
                                    <a class="dropdown-item" href="#">
                                        <img className='img-icon' src={require('../../asset/Images/leaf2.png')} />
                                        Hạt Giống Rau Gia Vị</a>
                                    <a class="dropdown-item" href="#">
                                        <img className='img-icon' src={require('../../asset/Images/flower.png')} />
                                        Hạt Giống Hoa</a>
                                    <a class="dropdown-item" href="#">
                                        <img className='img-icon' src={require('../../asset/Images/spider.png')} />
                                        Hạt Giống Cỏ</a>
                                </div>
                                <div className='col-4 mt-5'>
                                    <img class='logo' src={require("../../asset/Images/Logo.png")} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link nav-a" aria-current="page" href="#">TRANG CHỦ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-a" href="#">SẢN PHẨM</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-a" href="#">VỀ CHÚNG TÔI</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-a" href="#">LIÊN HỆ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-a" href="#">TIN TỨC</a>
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>

        </div>

    );
}
export default Nav;