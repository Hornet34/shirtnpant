import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCurrentUser } from '../../store/user/user.selector';

import { ReactComponent as Logo } from '../../assets/Untitled (1).svg';
import { NavigationContainer, NavLink, NavLinks, LogoContainer } from './navigation.styles.jsx';
import { useDispatch } from 'react-redux';
import { signOutStart } from '../../store/user/user.slice';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

const Navigation = () => {
    const dispatch = useDispatch();
    const signOutUser = () => dispatch(signOutStart());
    const isCartOpen = useSelector(selectIsCartOpen);
    const currentUser = useSelector(selectCurrentUser);
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <Logo className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop' >SHOP</NavLink>
                    {!currentUser ? (<NavLink to='/signIn' >SIGN IN</NavLink>) :
                        (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>)}
                    <CartIcon />
                </NavLinks>
                {isCartOpen ? (<CartDropdown />) : null}

            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;