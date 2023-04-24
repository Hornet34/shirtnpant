import './home-menu-item.styles.scss';

const HomeMenuItem = (props) => {

    const { title, imageUrl } = props.menuItem;

    return (
        <div className="menu-item-container">
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="body">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default HomeMenuItem;