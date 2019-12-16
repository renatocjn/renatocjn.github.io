import React from 'react';

import Grid from "@material-ui/core/Grid"
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from "@material-ui/core/Divider"

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import useStyles from "../styles"

export default props => {
   const classes = useStyles()
   return (
      <Card className={classes.experienceEntry}>
         <CardHeader title={props.position} subheader={props.company}
            classes={{title: classes.experienceEntryHeader,
               subheader: classes.experienceEntrySubHeader}}/>
         <Divider variant="middle"/>
         <CardContent className={classes.experienceEntryContent}>
            <Typography variant="body2">
               <List disableSpacing>
                  <Grid container>
                     <Grid item xs={12} sm={4} md={3}>
                        <ListItem key={0}>
                           <ListItemText secondary="Begin" primary={props.start.toLocaleDateString()} />
                        </ListItem>
                     </Grid>
                     <Grid item xs={12} sm={4} md={3}>
                        <ListItem key={1}>
                           <ListItemText secondary={props.end ? "End" : "Current"}
                                         primary={props.end && props.end.toLocaleDateString()}/>
                        </ListItem>
                     </Grid>
                  </Grid>
                  {props.activites.map((txt, idx) => (
                     <ListItem key={idx+2}> <ListItemText> {txt} </ListItemText> </ListItem>
                     ))}
               </List>
            </Typography>
         </CardContent>
      </Card>
   )
}
