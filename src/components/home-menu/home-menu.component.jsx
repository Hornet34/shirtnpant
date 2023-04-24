
import HomeMenuItem from "../home-menu-item/home-menu-item.component";
import './home-menu.style.scss'

const HomeMenu = (props) => {
    const { menu } = props;
    return (
        <div className="menu-container">
            {menu.map((menuItem) => (
                <HomeMenuItem menuItem={menuItem} key={menuItem.id} />
            ))}
        </div>)
}

export default HomeMenu;