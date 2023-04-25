import { useContext } from "react";
import { CartContext } from '../../context/cart.context';
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CheckoutContainer, CheckoutHeader, Heading, Total } from './checkout.styles.jsx';

const Checkout = () => {
    const { totalPrice } = useContext(CartContext);
    const { cartItems } = useContext(CartContext);
    const getTotalPrice = totalPrice();
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <Heading>
                    <span>Product</span>
                </Heading>

                <Heading>
                    <span>Description</span>
                </Heading>

                <Heading>
                    <span>Quantity</span>
                </Heading>

                <Heading>
                    <span>Price</span>
                </Heading>

                <Heading>
                    <span>Remove</span>
                </Heading>
            </CheckoutHeader>
            {cartItems.map((item) => <CheckoutItem key={item.id} item={item}></CheckoutItem>)}
            <Total>Total: ₹{getTotalPrice}</Total>
        </CheckoutContainer>
    );
}

export default Checkout;