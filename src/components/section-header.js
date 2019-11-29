import React from 'react';
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Icon from "@material-ui/core/Icon"

import useStyles from '../styles'

export default props => {
   const classes = useStyles()
   return (
      <Box className={classes.sectionHeader}>
         {props.icon}
         <Typography variant="h2" className={classes.sectionTitle}>
            {props.title}
         </Typography>
         <Typography variant="subtitle2" className={classes.sectionSubtitle}>
            {props.subtitle}
         </Typography>
      </Box>
   )
}
