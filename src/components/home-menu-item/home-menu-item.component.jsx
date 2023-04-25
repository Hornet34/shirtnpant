import { MenuItemContainer, BackgroundImage, Body } from './home-menu-item.styles';
import { useNavigate } from 'react-router-dom';

const HomeMenuItem = (props) => {
    const navigate = useNavigate();
    const { title, imageUrl, route } = props.menuItem;
    const navigationHandler = () => navigate(route);

    return (
        <MenuItemContainer onClick={navigationHandler}>
            <BackgroundImage imageUrl={imageUrl} />
            <Body className="body">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </MenuItemContainer>
    )
}

export default HomeMenuItem;