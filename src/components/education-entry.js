import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from '../styles'

export default props => {
   const [isExpanded, setExpansion] = React.useState(false)
   const toggleExpansion = () =>
      setExpansion(!isExpanded);

   const classes = useStyles()

   return (
      <Card elevation={0} className={classes.educationEntry}>
         <CardHeader avatar={props.avatar} title={props.title} subheader={props.area}
            classes={{title: classes.educationEntryHeader,
               subheader: classes.educationEntrySubHeader}} />
         <Divider variant="middle" light/>
         <CardContent className={classes.educationEntryContent}>
            <List disablePadding dense>
               <ListItem>
                  <ListItemText primary={props.school} />
               </ListItem>
               <ListItem className={classes.listItemHalfWidth}>
                  <ListItemText primary="Begin" secondary={props.begin}/>
               </ListItem>
               <ListItem className={classes.listItemHalfWidth}>
                  <ListItemText primary="End" secondary={props.end ? props.end : "Current"}/>
               </ListItem>
            </List>
         </CardContent>
         { props.extra &&
            <React.Fragment>
               <CardActions disablePadding>
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
