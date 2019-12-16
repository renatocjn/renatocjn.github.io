import React from 'react';

import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from '../styles'

export default props => {
   const [isExpanded, setExpansion] = React.useState(false)
   const toggleExpansion = () =>
      setExpansion(!isExpanded);

   const classes = useStyles()

   return (
      <Card classes={classes.educationEntry}>
         <CardHeader avatar={props.avatar}
            classes={{title: classes.educationEntryHeader,
               subheader: classes.educationEntrySubHeader}}
            title={props.title} subheader={props.area}/>
         <Divider variant="middle" />
         <CardContent className={classes.educationEntryContent}>
            <List disableSpacing>
               <ListItem>
                  <ListItemText primary={props.school} />
               </ListItem>
               <Grid container>
                  <Grid item xs={6} sm={4}>
                     <ListItem>
                        <ListItemText primary={props.begin}
                           secondary="Begin"/>
                     </ListItem>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                     <ListItem> <ListItemText primary={props.end ? props.end : "Current"}
                        secondary="End"/>
                     </ListItem>
                  </Grid>
               </Grid>
            </List>
         </CardContent>
         { props.extra &&
            <React.Fragment>
               <CardActions disableSpacing>
                  <IconButton
                     onClick={toggleExpansion}
                     aria-expanded={isExpanded}
                     aria-label="show more">
                     <ExpandMoreIcon />
                  </IconButton>
               </CardActions>
               <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                  <CardContent>
                     {props.extra}
                  </CardContent>
               </Collapse>
            </React.Fragment>
         }
      </Card>
   )
}
