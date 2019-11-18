import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default props => (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
         {props.children}
      </Container>
    </React.Fragment>
  )
