import React from 'react';

// App bar stuff
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// Drawer stuff
import Drawer from '@material-ui/core/SwipeableDrawer';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
// import ListItem from "@material-ui/core/ListItem"
// import ListItemText from "@material-ui/core/ListItemText"

import Divider from '@material-ui/core/Divider';

import NavLinks from './nav-links';
import ContactsList from './contacts';

import useStyles from '../styles';

export default (props) => {
  const [isDrawerOpen, setDrawerState] = React.useState(false);
  const classes = useStyles();

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown'
         && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerState(open);
  };

  return (
    <Box>
      <AppBar className={classes.appBar}>
        <ToolBar>
          <Hidden mdUp implementation="css">
            <IconButton
              color="inherit"
              aria-label="Open shortcuts"
              onClick={() => setDrawerState(true)}
              className={classes.appBarBtn}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="h1" className={classes.appBarTitle}>
            <Hidden xsDown>Renato&nbsp;</Hidden>
            {' '}
            <Hidden smUp>R.&nbsp;</Hidden>
            <Hidden smDown>Caminha&nbsp;</Hidden>
            {' '}
            <Hidden mdUp>C.&nbsp;</Hidden>
            Juaçaba Neto
          </Typography>
          <Hidden xsDown>
            <Typography variant="subtitle1" className={classes.appBarSubtitle}>
              {props.position}
            </Typography>
          </Hidden>
        </ToolBar>
      </AppBar>

      <Hidden lgUp implementation="css">
        <Drawer
          variant="temporary"
          className={classes.drawer}
          component="nav"
          open={isDrawerOpen}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          onClose={() => {}}
          onOpen={() => {}}
          ModalProps={{ keepMounted: true }}
        >
          <List>
            <ContactsList info={props.contact_info} />
            <Divider className={classes.dividerWithPadding} />
            <NavLinks />
          </List>
        </Drawer>
      </Hidden>
    </Box>
  );
};
