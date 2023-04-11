import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/Untitled (1).svg';
import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link to='/' className='logo-container'>
                    <Logo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link to='/shop' className="nav-link">SHOP</Link>
                    <Link to='/signIn' className="nav-link">SIGN IN</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;