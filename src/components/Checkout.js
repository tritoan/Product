import React from 'react';
import './Checkout.css'
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_lefe">
                <h2 className="checkout_title">Cửa hàng đang kiểm tra giỏ hàng</h2>
                <p>Bạn có 1 sản phẩm trong giỏ hàng.</p>
            </div>
            <div className="checkout_right ">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;