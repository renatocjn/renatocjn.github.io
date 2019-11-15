import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import MyAppBar from './my-app-bar';

export default () => (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
      <MyAppBar/>
      {React.children}
      </Container>
    </React.Fragment>
  )
