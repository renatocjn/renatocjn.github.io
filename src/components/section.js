import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from "@material-ui/core/Grid"

import SectionHeader from './section-header';

export default props => (
   <Paper id={props.sectionId} className="section">
      <Grid container spacing={1}>
         <Grid item xs={12} md={9}>
            <SectionHeader title={props.name} />
         </Grid>

         {/*IDEA Maybe add picture*/}

         <Grid item xs={12}>
            {props.children}
         </Grid>
      </Grid>
   </Paper>
)
