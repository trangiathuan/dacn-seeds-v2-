import './login.css';

const Login = () => {
    return (
        <div className='brg'>
            <div className="login-container">
                <div className="login-content">
                    <form className="login-form">
                        <h2 className="text-center">ĐĂNG NHẬP</h2>
                        <div className="form-group">
                            <label htmlFor="email" className="mb-2">Tên tài khoản</label>
                            <input type="email" className="form-control" placeholder="Nhập tên tài khoản" />
                        </div>
                        <div className="form-group mb-5">
                            <label htmlFor="password" className="mb-2">Mật khẩu</label>
                            <input type="password" className="form-control" placeholder="Nhập mật khẩu" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Đăng nhập</button>
                        <p className="text-center mt-3">Bạn chưa có tài khoản đăng nhập ? <a href="/register">Đăng kí</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
