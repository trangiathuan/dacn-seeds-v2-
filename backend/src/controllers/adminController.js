const Product = require('../models/product'); // Đường dẫn đến model Product

// API lấy tất cả sản phẩm và thay thế categoryID bằng categoryName
exports.getAllProducts = async (req, res) => {
    try {
        // Tìm tất cả các sản phẩm
        const products = await Product.find().populate('categoryID', 'categoryName');

        // Trả về kết quả mà không cần chuyển đổi nếu bạn chỉ muốn lấy `categoryID`


        console.log(products); // Log dữ liệu sản phẩm để kiểm tra

        // Trả về kết quả với `categoryID`
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error); // Log lỗi để kiểm tra
        res.status(500).json({ message: 'Đã xảy ra lỗi trên server', error: error.message });
    }
};
