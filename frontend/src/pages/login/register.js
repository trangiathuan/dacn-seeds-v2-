import './login.css';

const Register = () => {
    return (
        <div className='brg'>
            <div className="login-container">
                <div className="login-content">
                    <form className="login-form">
                        <h2 className="text-center">ĐĂNG KÍ TÀI KHOẢN</h2>
                        <div className="form-group">
                            <label htmlFor="email" className="mb-2">Tên tài khoản</label>
                            <input type="text" className="form-control" placeholder="Nhập tên tài khoản" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="mb-2">Mật khẩu</label>
                            <input type="password" className="form-control" placeholder="Nhập mật khẩu" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="mb-2">Họ và tên</label>
                            <input type="text" className="form-control" placeholder="Nhập họ và tên" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="mb-2">Ngày sinh</label>
                            <input type="date" className="form-control" placeholder="Nhập ngày sinh" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="mb-2">Địa chỉ</label>
                            <input type="text" className="form-control" placeholder="Nhập địa chỉ" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="mb-2">Số điện thoại</label>
                            <input type="text" className="form-control" placeholder="Nhập số điện thoại" />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="password" className="mb-2">Email</label>
                            <input type="email" className="form-control" placeholder="Nhập email" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Đăng kí</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;