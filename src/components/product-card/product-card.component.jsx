import { ProductCardContainer, Footer, Name, Price } from './product-card.styles.jsx';
import Button, { buttonTypeClasses } from '../button/button.component';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.slice.js';

const ProductCard = (props) => {
    const dispatch = useDispatch();
    const { name, imageUrl, price } = props.product;
    const addProductToCart = () => {
        dispatch(addItemToCart(props.product));
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