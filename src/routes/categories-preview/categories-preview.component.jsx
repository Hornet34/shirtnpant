import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesData } from '../../store/categories/categories.selectors'
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
    const categories = useSelector(selectCategoriesData);
    return (
        <Fragment>
            {categories.map((category) => <CategoryPreview key={category.title} title={category.title} products={category.items} />)}
        </Fragment>

    );
}

export default CategoriesPreview;