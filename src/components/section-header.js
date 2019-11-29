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
         <Typography variant="h2">
            {props.title}
         </Typography>
         <Typography variant="subtitle2">
            {props.subtitle}
         </Typography>
      </Box>
   )
}
