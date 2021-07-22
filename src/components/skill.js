import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';

import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/Add';
import ExpandLessIcon from '@material-ui/icons/Remove';

import ProgressBeginner from '@material-ui/icons/Battery20';
import ProgressIntermediary from '@material-ui/icons/Battery60';
import ProgressAdvanced from '@material-ui/icons/Battery90';

import useStyles from '../styles';

export default function SkillCard(props) {
  const classes = useStyles();

  const [showMore, setShowMore] = React.useState(false);

  const toogleShowMore = () => {
    setShowMore(!showMore);
  };

  const progressIcons = {
    1:
  <Tooltip title={props.levels[1]} arrow>
    <ProgressBeginner style={{ transform: 'rotate(90deg)' }} />
  </Tooltip>,
    2:
  <Tooltip title={props.levels[2]} arrow>
    <ProgressIntermediary style={{ transform: 'rotate(90deg)' }} />
  </Tooltip>,
    3:
  <Tooltip title={props.levels[3]} arrow>
    <ProgressAdvanced style={{ transform: 'rotate(90deg)' }} />
  </Tooltip>,
  };

  const expandComp = (
    <IconButton
      onClick={toogleShowMore}
      aria-expanded={showMore}
      aria-label="show more"
    >
      {showMore ? <ExpandLessIcon /> : <ExpandMoreIcon />}
    </IconButton>
  );

  const modal_label_id = `${props.name}-description-title`;
  const modal_description_id = `${props.name}-description-text`;
  return (
    <Card className={classes.skill_card} variant="outlined" elevation={0}>
      <CardHeader
        avatar={progressIcons[props.level]}
        title={props.name}
        action={expandComp}
      />
      <Modal
        open={showMore}
        onClose={toogleShowMore}
        aria-labelledby={modal_label_id}
        aria-describedby={modal_description_id}
      >
        <Paper className={classes.skillModal}>
          <Typography id={modal_label_id} variant="h3">{props.name}</Typography>
          <Typography id={modal_description_id} variant="p">{props.few_words}</Typography>
        </Paper>
      </Modal>
    </Card>
  );
}
