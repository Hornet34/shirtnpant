import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles';
import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartQuantity } = useContext(CartContext);
    const cartClick = () => {
        setIsCartOpen(!isCartOpen);
    }
    return (
        <CartIconContainer onClick={cartClick}>
            <ShoppingIcon />
            <ItemCount>{cartQuantity}</ItemCount>
        </CartIconContainer>
    );
}
export default CartIcon;