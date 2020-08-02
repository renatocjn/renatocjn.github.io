import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';

import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/Add';
import ExpandLessIcon from '@material-ui/icons/Remove';

import PublicationButton from './publication-button'
import useStyles from "../styles"

export default props => {

  const classes = useStyles()

  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  };

  const expandComp = (
    <IconButton
      onClick={handleExpandClick}
      aria-expanded={expanded}
      aria-label="show more">
        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
    </IconButton>
  )

  return (
    <Card elevation={0} variant='outlined' className={classes.publication_card}>
      <CardHeader title={<b>{props.title}</b>} titleTypographyProps={{variant: 'subtitle1'}}
        action={props.few_words ? expandComp : undefined}/>

      <Divider variant='middle' light/>

      <CardContent>
        <Typography body2> Authors: {props.authors.join(", ")} </Typography>
        <Typography body2> Venue: {props.venue} </Typography>
        <Typography body2> Location: {props.location} </Typography>
        <Typography body2> Year: {props.year} </Typography>
        <CardActions>
          {props.links.map(link => (
            <PublicationButton {...link} />
            ))}
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Divider variant='middle' light/>
          <Typography body2> {props.few_words} </Typography>
        </Collapse>
      </CardContent>
    </Card>
  )
}
