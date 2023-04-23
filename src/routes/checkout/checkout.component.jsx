import { useContext } from "react";
import { CartContext } from '../../context/cart.context';
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import './checkout.styles.scss';

const Checkout = () => {
    const { totalPrice } = useContext(CartContext);
    const { cartItems } = useContext(CartContext);
    const getTotalPrice = totalPrice();
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>

                <div className="header-block">
                    <span>Description</span>
                </div>

                <div className="header-block">
                    <span>Quantity</span>
                </div>

                <div className="header-block">
                    <span>Price</span>
                </div>

                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((item) => <CheckoutItem key={item.id} item={item}></CheckoutItem>)}
            <span className="total">Total: ₹{getTotalPrice}</span>
        </div>
    );
}

export default Checkout;