import { CartItemContainer, ItemDetails, Image, Name } from './cart-item.styles.jsx';

const CartItem = (props) => {
    const { name, quantity, price, imageUrl } = props.item;
    return (
        <CartItemContainer>
            <Image src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <Name>{name}</Name>
                <span>{quantity} x ₹{price}</span>
            </ItemDetails>
        </CartItemContainer>
    );
}

export default CartItem;