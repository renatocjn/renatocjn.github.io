import React from 'react';

import Grid from "@material-ui/core/Grid"

import Section from '../components/section';
import ExperienceEntry from '../components/experience-entry';

import WorkIcon from '@material-ui/icons/Work';

export default props => (
   <Section sectionId="experience" title="Work Experience"
      subtitle="Where I worked at" icon={<WorkIcon/>}>
      <Grid container spacing={1}>
      {props.data.map((entry, idx) => (
            <Grid item key={idx} lg={12} xl={6}>
               <ExperienceEntry {...entry} />
            </Grid>
            ))}
      </Grid>
   </Section>
)
