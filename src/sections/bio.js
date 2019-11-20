import React from 'react'
import Typography from '@material-ui/core/Typography'
import Section from '../components/section';

export default props => (
   <Section sectionId="bio" name="Short Bio">
      <Typography variant="body1" className="bio-text">
         {props.short_bio}
      </Typography>
   </Section>
)
