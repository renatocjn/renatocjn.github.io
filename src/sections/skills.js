import React from 'react';

import Grid from "@material-ui/core/Grid"

import ExtensionIcon from '@material-ui/icons/Extension';

import Section from '../components/section';
import SkillCard from '../components/skill-card';

export default props => {
  const sortedSkillList = props.data.list.sort((a, b) => (a.level < b.level) ? 1 : -1)

  return (
    <Section sectionId="skills" title="Skills"
    subtitle="What I can do" icon={<ExtensionIcon/>}>
      <Grid container spacing={1}>
        {sortedSkillList.map(skill => {
          return (
            <Grid item xs={6} sm={4} md={3}>
              <SkillCard {...skill} levels={props.data.levels} />
            </Grid>
          )
        })}
      </Grid>
    </Section>
  )
}
