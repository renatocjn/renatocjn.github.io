import React from 'react'

import Grid from '@material-ui/core/Grid'

import EducationEntry from '../components/education-entry'
import Section from '../components/section';

export default props => (
   <Section sectionId="education" name="Education">
      <Grid container spacing={1}>
         {props.data.map((entry, idx) => {
            return <Grid item key={idx} xs={12} sm={6} md={4}>
               <EducationEntry {...entry} />
            </Grid>
         })}
      </Grid>
   </Section>
)
