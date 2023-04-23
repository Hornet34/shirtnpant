import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartQuantity } = useContext(CartContext);
    const cartClick = () => {
        setIsCartOpen(!isCartOpen);
    }
    return (
        <div className='cart-icon-container' onClick={cartClick}>
            <ShoppingBag className='shopping-icon' />
            <span className='item-count'>{cartQuantity}</span>
        </div>
    );
}
export default CartIcon;