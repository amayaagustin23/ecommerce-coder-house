import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../../assets/logo/logo.png';
import Facebook from '../../assets/icons/socials/facebook.png';
import Instagram from '../../assets/icons/socials/instagram.png';
import Youtube from '../../assets/icons/socials/youtube.png';
import Twitter from '../../assets/icons/socials/twitter.png';
import { CONTACT_PATH, HOME_PATH, SHOP_PATH } from '../../routes/path';
import CartWidget from '../cartWidget';

const pages = [
  {
    title: 'Home',
    route: HOME_PATH,
  },
  {
    title: 'Shop',
    route: SHOP_PATH,
  },
  {
    title: 'Contact',
    route: CONTACT_PATH,
  },

];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="navbar-container">
          <Link to="/">
            <img src={Logo} alt="" width="50" />
          </Link>
          <Box>
            <div className="navbar-socials">
              <a className="navbar-socials__icon" target="_blank" href="https://www.facebook.com/search/top?q=style%20pics%20sports" rel="noreferrer"><img src={Facebook} alt="facebook" width="32" /></a>
              <a className="navbar-socials__icon" target="_blank" href="https://www.instagram.com/stylepics.sports/" rel="noreferrer"><img src={Instagram} alt="instagram" width="32" /></a>
              <a className="navbar-socials__icon" target="_blank" href="https://twitter.com/home" rel="noreferrer"><img src={Twitter} alt="twitter" width="32" /></a>
              <a className="navbar-socials__icon" target="_blank" href="https://www.youtube.com/" rel="noreferrer"><img src={Youtube} alt="youtube" width="32" /></a>
            </div>
          </Box>
        </Toolbar>
      </Container>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <NavLink className="routeRes" to={page.route}>
                    <Typography>
                      {page.title}
                    </Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <NavLink
                className={(isActive) => `route${isActive ? '-active' : ''}`}
                to={page.route}
              >
                <Button
                  key={page.title}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <Typography>
                    {page.title}
                  </Typography>
                </Button>
              </NavLink>
            ))}
          </Box>
          <Box>
            <CartWidget count={4} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
