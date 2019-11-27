import React from 'react';

import Grid from "@material-ui/core/Grid"
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

export default props => (
   <Card className="education-entry">
      <Grid container spacing={0}>
         <Grid item sm={12} md={3}>
            <CardHeader avatar={props.avatar}
               title={props.position} subheader={props.company}/>
         </Grid>
         <Grid item sm={12} md={9}>
            <CardContent>
               <Typography variant="body2">
                  <List>
                     <ListItem key={0}> <ListItemText>
                        {props.start.toLocaleDateString()} <ArrowRightAltIcon /> {props.end ? props.end.toLocaleDateString() : "Current"} <br/>
                     </ListItemText> </ListItem>
                     {props.activites.map((txt, idx) => (
                        <ListItem key={idx+1}> <ListItemText> {txt} </ListItemText> </ListItem>
                        ))}
                  </List>
               </Typography>
            </CardContent>
         </Grid>
      </Grid>
   </Card>
)
