import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/Untitled (1).svg';
import './navigation.styles.scss';
import { UserContext } from '../../context/user.context';
import { signOutListner } from '../../utilities/firebase/firebase';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    return (
        <Fragment>
            <div className="navigation">
                <Link to='/' className='logo-container'>
                    <Logo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link to='/shop' className="nav-link">SHOP</Link>
                    {!currentUser ? (<Link to='/signIn' className="nav-link">SIGN IN</Link>) :
                        (<Link to='/' className='nav-link' onClick={signOutListner}>LOGOUT</Link>)}
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;