import React from 'react';
import './sidebar.css';

const Sidebar = () => {
    return (
        <div className="d-flex">
            <div className="sidebar flex-column p-3">
                <a href="#" className="nav-link active">
                    <img className='logo-sidebar' src={require('../../../asset/Images/home.png')} />
                    <span className="ms-2">Dashboard</span>
                </a>
                <a href="#" className="nav-link">
                    <img className='logo-sidebar' src={require('../../../asset/Images/clipboard.png')} />
                    <span className="ms-2">Đơn hàng</span>
                    <span className="badge bg-danger rounded-pill ms-4">16</span>
                </a>
                <a href="#" className="nav-link">
                    <img className='logo-sidebar' src={require('../../../asset/Images/list.png')} />
                    <span className="ms-2">Sản phẩm</span>
                </a>
                <a href="#" className="nav-link">
                    <img className='logo-sidebar' src={require('../../../asset/Images/user.png')} />
                    <span className="ms-2">Tài khoản</span>
                </a>

            </div>
        </div>
    );
};

export default Sidebar;
