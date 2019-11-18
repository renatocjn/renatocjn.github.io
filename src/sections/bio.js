import React from 'react'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
console.log(1)
export default () => (
   <Paper id="bio-section" className="section">
      <Grid container spacing={1}>
         <Grid item xs={12} md={9}>
            <Typography variant="h6" className="bio-title">
               Short bio
            </Typography>
         </Grid>

         <Grid item xs={12} md={3}>
            <Grid container alignItems="center" justify="center">
               <Avatar alt="Avatar picture" src="/avatar.jpg" className="bio-avatar"/>
            </Grid>
         </Grid>

         <Grid item xs={12}>
            <Typography variant="body1" className="bio-text">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
               aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
               voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
               occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
               anim id est laborum.
            </Typography>
         </Grid>
      </Grid>
   </Paper>
)
