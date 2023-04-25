import ProductCard from '../product-card/product-card.component';
import { CategoryPreviewContainer, Preview, Title } from './category-preview.styles.jsx';

const CategoryPreview = (props) => {
    const { title, products } = props;
    return (
        <CategoryPreviewContainer>
            <h2>
                <Title to={title.toLowerCase()} >{title.toUpperCase()}</Title>
            </h2>
            <Preview>
                {products.filter((_, idx) => idx < 4).map((product) => (<ProductCard key={product.id} product={product} />))}
            </Preview>
        </CategoryPreviewContainer>
    );
}

export default CategoryPreview;