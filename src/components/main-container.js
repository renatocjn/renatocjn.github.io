import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Box from "@material-ui/core/Box"
import Container from '@material-ui/core/Container';

export default props => (
   <Box component='main'>
      <CssBaseline />
      <Container maxWidth="lg">
         {props.children}
      </Container>
   </Box>
)
