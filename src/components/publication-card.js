import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';

import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';
import ExpandMoreIcon from '@material-ui/icons/Add';
import ExpandLessIcon from '@material-ui/icons/Remove';

import useStyles from '../styles';

export default (props) => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const expandComp = (
    <IconButton
      onClick={handleExpandClick}
      aria-expanded={expanded}
      aria-label="show more"
    >
      {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
    </IconButton>
  );

  return (
    <Card elevation={0} variant="outlined" className={classes.publication_card}>
      <CardHeader
        title={props.title}
        action={props.few_words ? expandComp : undefined}
        titleTypographyProps={{ variant: 'body1', className: classes.publication_card_title }}
      />

      <Divider variant="middle" light />

      <CardContent>
        <Typography body2 className={classes.publication_card_text}>
          <b>Authors:</b>
          {' '}
          {props.authors.join('; ')}
          {' '}
          <br />
          <b>Venue:</b>
          {' '}
          {props.venue}
          {' '}
          <br />
          <b>Location:</b>
          {' '}
          {props.location}
          {' '}
&nbsp; &nbsp; &nbsp;
          {' '}
          <b>Year:</b>
          {' '}
          {props.year}
        </Typography>

        <CardActions>
          {props.links.map(({ type, link }) => (
            <Button
              href={link}
              className={classes.pub_button}
              endIcon={<LinkIcon />}
              disableElevation
              size="small"
            >
              {type}
            </Button>
          ))}
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Divider variant="middle" light />
          <Typography body2 className={classes.publication_card_text}>
            {' '}
            {props.few_words}
            {' '}
          </Typography>
        </Collapse>
      </CardContent>
    </Card>
  );
};
