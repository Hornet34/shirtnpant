import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
    const { categories } = useContext(CategoriesContext);
    return (
        <Fragment>
            {categories.map((category) => <CategoryPreview key={category.title} title={category.title} products={category.items} />)}
        </Fragment>

    );
}

export default CategoriesPreview;