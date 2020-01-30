import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import ZoomInIcon from '@material-ui/icons/ZoomIn';

import useStyles from '../styles'

export default props => {
   const [isOpen, SetOpen] = React.useState(false)
   const toggleModal = () =>
      SetOpen(!isOpen);

   const classes = useStyles()

   return (
      <Card elevation={0} className={classes.educationEntry}>
         <CardHeader avatar={props.avatar} title={props.title} subheader={props.area}
            classes={{title: classes.educationEntryHeader,
               subheader: classes.educationEntrySubHeader}}
            action={props.extra && <IconButton aria-label="more" onClick={toggleModal} size="small"> <ZoomInIcon/> </IconButton>}/>
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
         <Dialog open={isOpen} onClose={() => SetOpen(false)} aria-labelledby={`more-info-${props.title}`}>
            <DialogContent>
               <DialogContentText>
                  {props.extra}
               </DialogContentText>
            </DialogContent>
         </Dialog>
      </Card>
   )
}
