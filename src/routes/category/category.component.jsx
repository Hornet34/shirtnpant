import './category.styles.scss';
import { useParams } from 'react-router-dom';
import { useState, useContext, useEffect, Fragment } from 'react';
import { CategoriesContext } from '../../context/categories.context';
import ProductCard from '../../components/product-card/product-card.component';

const Category = () => {

    const { category } = useParams();
    const { categories } = useContext(CategoriesContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(categories.filter((itemCategory) => itemCategory.title.toLowerCase() === category));
    }, [categories, category])
    console.log(products);
    return (
        <Fragment>
            {products.length > 0 && <h2 className='category-title'>{products[0].title.toUpperCase()}</h2>}
            <div className='category-container'>
                {products.length > 0 && products[0].items.map((product) => (<ProductCard key={product.id} product={product} />))}
            </div>
        </Fragment>

    );
}

export default Category;