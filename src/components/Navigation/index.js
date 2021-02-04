import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { AuthUserContext } from '../Session';
import SimpleMenu from './menu';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

const Navigation = () => (
    <AuthUserContext.Consumer>
        {authUser => authUser ? <NavigationAuth /> : <NavigationNonAuth />}
    </AuthUserContext.Consumer>
);

const NavigationNonAuth = () => {

    return (
        <AppBar position="static">
            <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Button component={RouterLink}to={ROUTES.SIGN_IN} color="inherit">Login</Button>
            <Button component={RouterLink} to={ROUTES.LANDING} color="inherit">Landing</Button>
            </Toolbar>
            <SimpleMenu />
        </AppBar>
    );
}

const NavigationAuth = () => (
    <ul>
        {/* <li>
            <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li>
            <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        <li>
            <Link to={ROUTES.ADMIN}>Admin</Link>
        </li> */}
        <li>
            <SimpleMenu />
        </li>
        <li>
            <SignOutButton />
        </li>
    </ul>
);

// const NavigationNonAuth2 = () => (
//     <ul>
//         <li>
//             <Link to={ROUTES.LANDING}>Landing</Link>
//         </li>
//         <li>
//             <Link to={ROUTES.SIGN_IN}>Sign In</Link>
//         </li>
//     </ul>
// );

export default Navigation;
