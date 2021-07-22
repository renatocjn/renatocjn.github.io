import React from 'react';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import GitHubIcon from '@material-ui/icons/GitHub';

import useStyle from '../styles';

export default (props) => {
  const classes = useStyle();

  return (
    <Paper className={classes.footer} square>
      <Button
        disableElevation
        href="https://github.com/renatocjn/react-website"
        className={[classes.footerComponent, classes.footerCodeLink]}
        size="small"
        startIcon={<GitHubIcon />}
      >
        source code
      </Button>
      <span className={[classes.footerComponent, classes.footerCopyright]}>
        &copy; 2020
      </span>
    </Paper>
  );
};
