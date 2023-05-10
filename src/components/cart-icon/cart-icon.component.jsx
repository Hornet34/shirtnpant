import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectCartQuantity, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.slice';

const CartIcon = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartQuantity = useSelector(selectCartQuantity);
    const cartClick = () => {
        dispatch(setIsCartOpen(!isCartOpen));
    }
    return (
        <CartIconContainer onClick={cartClick}>
            <ShoppingIcon />
            <ItemCount>{cartQuantity}</ItemCount>
        </CartIconContainer>
    );
}
export default CartIcon;