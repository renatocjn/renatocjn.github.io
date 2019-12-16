import React from 'react'
import Typography from '@material-ui/core/Typography'
import Section from '../components/section';
import Avatar from "@material-ui/core/Avatar"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"

import ShortTextIcon from '@material-ui/icons/ShortText';

import useStyles from '../styles'

export default props => {
   const classes = useStyles()
   return (
      <Grid container>
         <Grid sm={9} md={12} item>
            <Section sectionId="bio" title="Short Bio" icon={<ShortTextIcon/>}
                     subtitle="A short description of myself">
               <Typography variant="body1" className={classes.bioText}>
                  {props.short_bio}
               </Typography>
            </Section>
         </Grid>
         <Hidden mdUp>
            <Grid sm={3} item>
               <Avatar src="/avatar.jpg" variant="rounded"
                     className={classes.bioAvatar} />
            </Grid>
         </Hidden>
      </Grid>
   )
}
