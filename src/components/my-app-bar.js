import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden';

function renderLinks() {
   return <Typography>
         <Link href="#bio" onClick={() => {}} color="inherit" className="NavBarLink"> Bio </Link>
         <Link href="#education" onClick={() => {}} color="inherit" className="NavBarLink"> Education </Link>
         <Link href="#experience" onClick={() => {}} color="inherit" className="NavBarLink"> Experience </Link>
         <Link href="#contact" onClick={() => {}} color="inherit" className="NavBarLink"> Contact </Link>
         <Link href="#skills" onClick={() => {}} color="inherit" className="NavBarLink"> Skills </Link>
         <Link href="#published_papers" onClick={() => {}} color="inherit" className="NavBarLink"> Published Work </Link>
      </Typography>;
}

export default () => (
   <AppBar position="sticky" elevation={0}>
     <Toolbar>
      <Hidden mdUp>
         <IconButton color="inherit" aria-label="Open drawer" edge="start"> <MenuIcon /> </IconButton>
      </Hidden>
      <Typography type="title" color="inherit">
         Renato CJN
      </Typography>
      <Typography variant="subtitle">
         PhD Student
      </Typography>
      <Hidden smDown>
         {renderLinks()}
      </Hidden>
     </Toolbar>
   </AppBar>
)
