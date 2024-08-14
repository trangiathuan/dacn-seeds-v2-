import NavAdmin from "../component/nav-admin/nav-admin";
import Sidebar from "../component/sidebar/sidebar";
import CategoryChart from "./CategoryChart";


import './dashboard.css'
const Dashboard = () => {
    return (
        <div>
            <NavAdmin />
            <div className="row">
                <div className="col-3 sidebar-body">
                    <Sidebar />
                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col-3 card-body-dashboard">
                            <div className="card-dashboard">
                                <h4 className="mt-2 text-center">ĐƠN HÀNG</h4>
                                <p className="mt-2 text-center sl-ds">6</p>
                            </div>
                        </div>
                        <div className="col-3 card-body-dashboard">
                            <div className="card-dashboard">
                                <h4 className="mt-2 text-center">SẢN PHẨM</h4>
                                <p className="mt-2 text-center sl-ds">64</p>
                            </div>
                        </div>
                        <div className="col-3 card-body-dashboard">
                            <div className="card-dashboard">
                                <h4 className="mt-2 text-center">TÀI KHOẢN</h4>
                                <p className="mt-2 text-center sl-ds">3</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="chart">
                            < CategoryChart />

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
export default Dashboard;