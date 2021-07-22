import React from 'react';

// import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { useTheme } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';
import TimelineIcon from '@material-ui/icons/Timeline';
import WorkIcon from '@material-ui/icons/Work';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import Section from '../components/section';

const IconToUse = (props) => {
  if (props.type === 'education') {
    return <LocalLibraryIcon />;
  } if (props.type === 'work_experience') {
    return <WorkIcon />;
  }
  console.err('FUCK!');
  return false;
};

export default (props) => {
  const theme = useTheme();
  return (
    <Section
      sectionId="timeline"
      title="Timeline"
      subtitle="Events of my life"
      icon={<TimelineIcon />}
    >
      <VerticalTimeline layout="1-column-left">
        {props.timeline_data.map((item, idx) => (
          <VerticalTimelineElement
            date={item.dateTxt}
            icon={<IconToUse type={item.type} />}
          >
            <h3>{item.title}</h3>
            <Divider />
            <p>{item.tldr}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

    </Section>
  );
};
