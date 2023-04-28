import { useSelector, useDispatch } from 'react-redux';
import { CheckoutItemContainer, ImageContainer, Span, Quantity, Arrow, Value, RemoveButton } from './checkout-item.styles.jsx';
import { addItemToCart, subItemFromCart, deleteItemFromCart } from '../../store/cart/cart.action.js';
import { selectCartItems } from '../../store/cart/cart.selector.js';

const CheckoutItem = (props) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const addClick = () => dispatch(addItemToCart(cartItems, props.item));
    const subClick = () => dispatch(subItemFromCart(cartItems, props.item));
    const deleteClick = () => dispatch(deleteItemFromCart(cartItems, props.item));
    const { name, price, quantity, imageUrl } = props.item;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <Span>{name}</Span>
            <Quantity>
                <Arrow onClick={subClick}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addClick}>&#10095;</Arrow>
            </Quantity>
            <Span>₹{price}</Span>
            <RemoveButton onClick={deleteClick}>&#10005;</RemoveButton>

        </CheckoutItemContainer>
    );
}

export default CheckoutItem;