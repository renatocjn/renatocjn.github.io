import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from "@material-ui/core/Grid"

import SectionHeader from './section-header';
import useStyles from '../styles'

export default props => {
   const classes = useStyles()
   return <Paper id={props.sectionId} className={classes.section}>
            <SectionHeader title={props.title}
               subtitle={props.subtitle} icon={props.icon} />
            {/*IDEA Maybe add picture*/}
            {props.children}
          </Paper>
}
