import './navbar.css'
import '../../Materials/fontawesome-free-6.5.2-web/css/all.css'
const Nav = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-1'>

                </div>
                <div className='col-3'>
                    <img class='logo' src={require("../asset/images/Logo.png")} />
                </div>
                <div className='col-5'>
                    <div class="input-group mt-4 mb-3">
                        <input type="text" class="form-control" placeholder="Bạn muốn tìm hạt giống gì" />
                        <button class="btn btn-outline-secondary btn-search" type="button" id="button-addon2">Tìm kiếm</button>
                    </div>
                </div>
                <div className='col-4'>

                </div>
            </div>
            <nav class="navbar navbar-expand-lg nav-bg">
                {/* Menu dropdown */}
                <div class="dropdown ps-5">
                    <a class="btn dropdown nav-a" href="#" role="button" id="dropdownMenuLink">
                        Danh mục sản phẩm
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <img class='logo' src={require("../asset/images/Logo.png")} />
                        <div className='row'>
                            <div className='col-6'>
                                <a class="dropdown-item" href="#"><i class="fa-solid fa-seedling"></i>Hạt Giống Rau, Củ, Quả</a>
                                <a class="dropdown-item" href="#">Hạt Giống Rau Gia Vị</a>
                                <a class="dropdown-item" href="#">Hạt Giống Cây Ăn Trái</a>
                                <a class="dropdown-item" href="#">Hạt Giống Rau Mầm</a>
                                <a class="dropdown-item" href="#">Hạt Giống Cây Dược Liệu</a>
                                <a class="dropdown-item" href="#">Hạt Giống Hoa</a>
                            </div>
                            <div className='col-6'>
                                <a class="dropdown-item" href="#">Hạt Giống Cỏ</a>
                                <a class="dropdown-item" href="#">Hạt Giống Cây Cảnh</a>
                                <a class="dropdown-item" href="#">Vật Tư - Phân Bón</a>
                                <a class="dropdown-item" href="#">Combo Giá Rẻ</a>
                            </div>
                        </div>


                    </div>
                </div>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link nav-a" aria-current="page" href="#">Trang chủ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nav-a" href="#">Sản phẩm</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link nav-a" href="#">Về chúng tôi </a>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    );
}
export default Nav;