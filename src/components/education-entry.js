import React from 'react';

import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default props => {
   const [isExpanded, setExpansion] = React.useState(false)
   const toggleExpansion = () =>
      setExpansion(!isExpanded);

   return <Card className="education-entry">
      <CardHeader avatar={props.avatar}
         title={props.title} subheader={props.area}/>
      <Divider variant="middle" />
      <CardContent>
         <Typography variant="body2">
            {props.begin} <ArrowRightAltIcon /> {props.end ? props.end : "Current"} <br/>
            {props.school}
         </Typography>
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
}
