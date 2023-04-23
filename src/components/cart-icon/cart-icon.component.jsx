import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { CartDropdownContext } from '../../context/cart-dropdown.context';
import { useContext } from 'react';

const CartIcon = () => {
    const { visible, setVisible } = useContext(CartDropdownContext);
    const cartClick = () => {
        setVisible(!visible);
    }
    return (
        <div className='cart-icon-container' onClick={cartClick}>
            <ShoppingBag className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    );
}
export default CartIcon;