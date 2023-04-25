import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/Untitled (1).svg';
import { NavigationContainer, NavLink, NavLinks, LogoContainer } from './navigation.styles.jsx';
import { UserContext } from '../../context/user.context';
import { signOutListner } from '../../utilities/firebase/firebase';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../context/cart.context';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <Logo className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop' >SHOP</NavLink>
                    {!currentUser ? (<NavLink to='/signIn' >SIGN IN</NavLink>) :
                        (<NavLink to='/' onClick={signOutListner}>LOGOUT</NavLink>)}
                    <CartIcon />
                </NavLinks>
                {isCartOpen ? (<CartDropdown />) : null}

            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;