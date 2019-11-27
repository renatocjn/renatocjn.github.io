import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from "@material-ui/core/Grid"

import SectionHeader from './section-header';
import useStyles from '../styles'

export default props => {
   const classes = useStyles()
   return <Paper id={props.sectionId} className={classes.section}>
             <Grid container spacing={1}>
                <Grid item xs={12} md={9}>
                   <SectionHeader title={props.title}
                      subtitle={props.subtitle} icon={props.icon} />
                </Grid>
                   {/*IDEA Maybe add picture*/}
                   <Grid item xs={12}>
                   {props.children}
                </Grid>
             </Grid>
          </Paper>
}
