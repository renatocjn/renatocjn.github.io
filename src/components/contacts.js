import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Link from '@material-ui/core/Link';

import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import PinDropIcon from '@material-ui/icons/PinDrop';
import GitHubIcon from '@material-ui/icons/GitHub';

import useStyle from '../styles';

export default (props) => {
  const classes = useStyle();

  return (
    <>
      <ListItem className={[classes.navItems, classes.contactInfo].join(' ')}>
        <ListItemIcon>
          {' '}
          <MailIcon />
          {' '}
        </ListItemIcon>
        <ListItemText>
          <Link href={`mailto:${props.info.email}`}>
            {props.info.email}
          </Link>
        </ListItemText>
      </ListItem>

      <ListItem className={[classes.navItems, classes.contactInfo].join(' ')}>
        <ListItemIcon>
          {' '}
          <PhoneIcon />
          {' '}
        </ListItemIcon>
        <ListItemText primary={props.info.phone_number} />
      </ListItem>

      <ListItem className={[classes.navItems, classes.contactInfo].join(' ')}>
        <ListItemIcon>
          {' '}
          <GitHubIcon />
          {' '}
        </ListItemIcon>
        <ListItemText>
          <Link href={props.info.github}> GitHub </Link>
        </ListItemText>
      </ListItem>

      <ListItem className={[classes.navItems, classes.contactInfo].join(' ')}>
        <ListItemIcon>
          {' '}
          <PinDropIcon />
          {' '}
        </ListItemIcon>
        <ListItemText primary={props.info.address} />
      </ListItem>
    </>
  );
};
