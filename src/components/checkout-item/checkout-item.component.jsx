import './checkout-item.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';


const CheckoutItem = (props) => {
    const { addItemToCart, subItemFromCart, deleteItemFromCart } = useContext(CartContext);
    const addClick = () => addItemToCart(props.item);
    const subClick = () => subItemFromCart(props.item);
    const deleteClick = () => deleteItemFromCart(props.item);
    const { name, price, quantity, imageUrl } = props.item;
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={subClick}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addClick}>&#10095;</div>
            </span>
            <span className='price'>₹{price}</span>
            <div className="remove-button" onClick={deleteClick}>&#10005;</div>

        </div>
    );
}

export default CheckoutItem;