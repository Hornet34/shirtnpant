import { ProductCardContainer, Footer, Name, Price } from './product-card.styles.jsx';
import Button, { buttonTypeClasses } from '../button/button.component';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector.js';
import { addItemToCart } from '../../store/cart/cart.action.js';

const ProductCard = (props) => {
    const dispatch = useDispatch();
    const { name, imageUrl, price } = props.product;
    const cartItems = useSelector(selectCartItems)
    const addProductToCart = () => {
        dispatch(addItemToCart(cartItems, props.product));
    }

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType={buttonTypeClasses.inverted} onClick={addProductToCart}>Add to cart</Button>
        </ProductCardContainer>
    );
}

export default ProductCard;