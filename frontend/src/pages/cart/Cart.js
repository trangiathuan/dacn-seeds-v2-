// src/component/cart/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const { cart, removeFromCart, updateCartQuantity } = useContext(CartContext);

    return (
        <div>
            <h2>Giỏ Hàng</h2>
            {cart.length === 0 ? (
                <p>Giỏ hàng của bạn đang trống</p>
            ) : (
                cart.map((product) => (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Giá: {product.price}</p>
                        <p>Số lượng: {product.quantity}</p>
                        <button onClick={() => updateCartQuantity(product.id, product.quantity + 1)}>+</button>
                        <button onClick={() => updateCartQuantity(product.id, product.quantity - 1)}>-</button>
                        <button onClick={() => removeFromCart(product.id)}>Xóa</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
