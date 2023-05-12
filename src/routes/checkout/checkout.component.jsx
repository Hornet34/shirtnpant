import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CheckoutContainer, CheckoutHeader, Heading, Total } from './checkout.styles.jsx';
import PaymentForm from "../../components/payment-form/payment-form.component";

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const totalPrice = useSelector(selectCartTotal);
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
            <Total>Total: ₹{totalPrice}</Total>
            <PaymentForm />
        </CheckoutContainer>
    );
}

export default Checkout;