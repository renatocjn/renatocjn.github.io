import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/Add';
import ExpandLessIcon from '@material-ui/icons/Remove';

import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';

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
      <CardHeader avatar={<LocalLibraryIcon/>}
        title={props.title} action={props.few_words ? expandComp : undefined}/>
      <CardContent>
      <Typography> Authors: {props.authors.join(", ")} </Typography>
      <Typography> Venue: {props.venue} </Typography>
      <Typography> Location: {props.location} </Typography>
      <Typography> Year: {props.year} </Typography>
      <Typography> Links:
        {
          props.links.map(link => (
            <Button href={link.link} disableElevation size='small'>
              {link.type}
            </Button>
          ))
        }
      </Typography>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Divider variant='middle' light/>
        <Typography> {props.few_words} </Typography>
      </Collapse>
      </CardContent>
    </Card>
  )
}
