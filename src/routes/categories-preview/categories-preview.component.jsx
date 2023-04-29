import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesData, selectCategoriesIsLoading } from '../../store/categories/categories.selectors'
import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
    const categories = useSelector(selectCategoriesData);
    const isLoading = useSelector(selectCategoriesIsLoading);
    return (
        <Fragment>
            {isLoading ? (<Spinner />) : (categories.map((category) => <CategoryPreview key={category.title} title={category.title} products={category.items} />))}
        </Fragment>

    );
}

export default CategoriesPreview;