const Order = require('../models/order'); // Đảm bảo đường dẫn này đúng
const CartItem = require('../models/cartItem'); // Đảm bảo đường dẫn này đúng

exports.checkout = async (req, res) => {
    try {
        const userId = req.user.userId;

        const { fullName, email, phoneNumber, addDress, items, totalPrice, paymentMethod } = req.body;

        if (!userId) {
            return res.status(400).json({ message: 'User ID is missing' });
        }

        const order = new Order({
            userId,
            fullName,
            email,
            phoneNumber,
            addDress,
            paymentMethod,
            items: items.map(item => ({
                productName: item.productName,
                price: item.price,
                quantity: item.quantity,
            })),
            totalPrice
        });

        await order.save();

        await CartItem.deleteMany({ userId });

        res.status(200).json({ message: 'Thanh toán thành công', orderId: order._id });
    } catch (err) {
        console.error("Error during checkout process:", err);
        res.status(500).json({ message: 'Lỗi hệ thống', error: err.message });
    }
};
