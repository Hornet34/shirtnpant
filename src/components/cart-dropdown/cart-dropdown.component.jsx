import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles.jsx';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector.js';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))) : (<EmptyMessage>Your cart is empty</EmptyMessage>)}

            </CartItems>
            <Link to='/checkout'><Button>Go to checkout</Button></Link>
        </CartDropdownContainer>
    );
}

export default CartDropdown;