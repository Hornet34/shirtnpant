import { CategoryContainer, CategoryTitle } from './category.styles.jsx';
import { useParams } from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesData } from '../../store/categories/categories.selectors.js';
import ProductCard from '../../components/product-card/product-card.component';

const Category = () => {

    const { category } = useParams();
    const categories = useSelector(selectCategoriesData);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(categories.filter((itemCategory) => itemCategory.title.toLowerCase() === category));
    }, [categories, category])
    console.log(products);
    return (
        <Fragment>
            {products.length > 0 && <CategoryTitle>{products[0].title.toUpperCase()}</CategoryTitle>}
            <CategoryContainer>
                {products.length > 0 && products[0].items.map((product) => (<ProductCard key={product.id} product={product} />))}
            </CategoryContainer>
        </Fragment>

    );
}

export default Category;