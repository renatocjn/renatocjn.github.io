import React from 'react';

import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

import Section from '../components/section';

import { useTheme } from '@material-ui/styles';
import Divider from "@material-ui/core/Divider"
import TimelineIcon from '@material-ui/icons/Timeline';

export default props => {
   const theme = useTheme()

   return (
      <Section sectionId="timeline" title="Timeline"
      subtitle="Events of my life" icon={<TimelineIcon/>}>
         <Timeline lineColor={theme.palette.primary.main}>
            {props.timeline_data.map((item, idx) => (
               <TimelineItem key={idx} dateText={item.dateTxt}>
                  <React.Fragment>
                     <h3>{item.title}</h3>
                     <Divider/>
                     <p>{item.tldr}</p>
                  </React.Fragment>
               </TimelineItem>
            ))}
         </Timeline>

      </Section>
   )
}
