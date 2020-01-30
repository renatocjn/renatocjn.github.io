import React from 'react'

import Grid from '@material-ui/core/Grid'

import EducationEntry from '../components/education-entry'
import Section from '../components/section';

import SchoolIcon from '@material-ui/icons/School';

export default props => (
   <Section sectionId="education" title="Education"
      subtitle="My academic formation" icon={<SchoolIcon/>}>
      <Grid container spacing={1}>
         {props.data.map((entry, idx) => (
            <Grid item key={idx} xs={12} sm={6} md={4}>
               <EducationEntry {...entry} />
            </Grid>
         ))}
      </Grid>
   </Section>
)
