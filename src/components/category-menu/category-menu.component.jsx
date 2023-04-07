
import CategoryItem from "../category-item/category-item.component";
import './category-menu.style.scss';

const CategoryMenu = (props) => {
    const { categories } = props;
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <CategoryItem category={category} key={category.id} />
            ))}
        </div>)
}

export default CategoryMenu;