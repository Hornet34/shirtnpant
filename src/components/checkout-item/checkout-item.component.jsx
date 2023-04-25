import { CheckoutItemContainer, ImageContainer, Span, Quantity, Arrow, Value, RemoveButton } from './checkout-item.styles.jsx';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';


const CheckoutItem = (props) => {
    const { addItemToCart, subItemFromCart, deleteItemFromCart } = useContext(CartContext);
    const addClick = () => addItemToCart(props.item);
    const subClick = () => subItemFromCart(props.item);
    const deleteClick = () => deleteItemFromCart(props.item);
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