import React from 'react';

// import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { useTheme } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';
import TimelineIcon from '@material-ui/icons/Timeline';
import Section from '../components/section';

export default (props) => {
  const theme = useTheme();

  return (
    <Section
      sectionId="timeline"
      title="Timeline"
      subtitle="Events of my life"
      icon={<TimelineIcon />}
    >
      <VerticalTimeline>
        {props.timeline_data.map((item, idx) => (
          <VerticalTimelineElement>
            <h3>{item.title}</h3>
            <Divider />
            <p>{item.tldr}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

    </Section>
  );
};
