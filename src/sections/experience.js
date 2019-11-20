import React from 'react';

import Grid from "@material-ui/core/Grid"

import Section from '../components/section';
import ExperienceEntry from '../components/experience-entry';

export default props => (
   <Section sectionId="experience" name="Work Experience">
      <Grid container spacing={1}>
      {props.data.map((entry, idx) => (
            <Grid item key={idx} md={12} lg={6}>
               <ExperienceEntry {...entry} />
            </Grid>
            ))}
      </Grid>
   </Section>
)
