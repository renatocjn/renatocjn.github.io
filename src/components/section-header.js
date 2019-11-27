import React from 'react';
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import useStyles from '../styles'

export default props => {
   const classes = useStyles()
   return (
      <Box className={classes.section_header}>
         {props.icon}
         <Typography variant="section-title">
            {props.title}
         </Typography>
         <Typography variant="section-subtitle">
            {props.subtitle}
         </Typography>
      </Box>
   )
}
