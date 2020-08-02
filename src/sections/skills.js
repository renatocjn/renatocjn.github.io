import React from 'react';

import Grid from "@material-ui/core/Grid"

import ExtensionIcon from '@material-ui/icons/Extension';

import Section from '../components/section';
import SkillCard from '../components/skill-card';

import useStyles from '../styles'

export default props => {
  const sortedSkillList = props.data.list.sort((a, b) => (a.level < b.level) ? 1 : -1)
  const classes = useStyles()

  return (
    <Section sectionId="skills" title="Skills"
    subtitle="What I can do" icon={<ExtensionIcon/>}>
      <Grid container spacing={1} className={classes.skill_card_container}>
        {sortedSkillList.map(skill => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <SkillCard {...skill} levels={props.data.levels} />
            </Grid>
          )
        })}
      </Grid>
    </Section>
  )
}
