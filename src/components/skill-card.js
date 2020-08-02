import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/Add';
import ExpandLessIcon from '@material-ui/icons/Remove';

import ProgressBeginner from '@material-ui/icons/Battery30';
import ProgressIntermediary from '@material-ui/icons/Battery60';
import ProgressAdvanced from '@material-ui/icons/Battery90';

import useStyles from "../styles"

export default function SkillCard(props) {
  const classes = useStyles()

  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  };

  const progressIcons = {
    1: <Tooltip title={props.levels[1]} arrow>
         <ProgressBeginner style={{ transform: 'rotate(90deg)' }}/>
       </Tooltip>,
    2: <Tooltip title={props.levels[2]} arrow>
         <ProgressIntermediary style={{ transform: 'rotate(90deg)' }}/>
       </Tooltip>,
    3: <Tooltip title={props.levels[3]} arrow>
         <ProgressAdvanced style={{ transform: 'rotate(90deg)' }}/>
       </Tooltip>
  }

  const expandComp = (
    <IconButton
      onClick={handleExpandClick}
      aria-expanded={expanded}
      aria-label="show more">
        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
    </IconButton>
  )

  return (
    <Card className={classes.skill_card} variant="outlined" elevation={0}>
      <CardHeader avatar={progressIcons[props.level]}
        title={props.name}
        action={expandComp}/>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {props.few_words}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
