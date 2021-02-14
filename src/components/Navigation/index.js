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
        {authUser => authUser ? <NavigationAuth /> : null}
    </AuthUserContext.Consumer>
);


const NavigationAuth = () => (
    <AppBar position="static">
        <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
        </IconButton>
        <Button component={RouterLink} to={ROUTES.LANDING} color="inherit">Landing</Button>
        <Button component={RouterLink} to={ROUTES.ACCOUNT} color="inherit">Account</Button>
        <Button component={RouterLink} to={ROUTES.HOME} color="inherit">Home</Button>
        <SignOutButton />
        </Toolbar>
        <SimpleMenu />
    </AppBar>
    // <ul>
    //     <li>
    //         <SimpleMenu />
    //     </li>
    //     <li>
    //         <Button component={RouterLink} to={ROUTES.SIGN_IN} color="inherit">Login</Button>
    //         <SignOutButton />
    //     </li>
    // </ul>
);

export default Navigation;
