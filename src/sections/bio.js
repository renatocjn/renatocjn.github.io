import React from 'react'
import Typography from '@material-ui/core/Typography'
import Section from '../components/section';

import ShortTextIcon from '@material-ui/icons/ShortText';

export default props => (
   <Section sectionId="bio" title="Short Bio" subtitle="A short description of myself"
            icon={<ShortTextIcon size="large" color="secondary"/>}>
      <Typography variant="body1" className="bio-text">
         {props.short_bio}
      </Typography>
   </Section>
)
