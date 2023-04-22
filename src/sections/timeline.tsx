import React from 'react';

import Section from '../components/section';

import { EducationItem, WorkItem, PublishedWork, TimelineItem, CvInformation } from '../data/models';

import EducationComponent from '../components/education';
import WorkComponent from '../components/work';
import PublicationComponent from '../components/publication';

type ArrayElement<ArrayType extends readonly unknown[]> = 
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MapToTimelineComponent = (props: ArrayElement<CvInformation['timeline']>) => {
  if (props.type === 'education') {
    const educationProps = props as EducationItem
    return <EducationComponent {...educationProps} />;
  } else if (props.type === 'work_experience') {
    const workProps = props as WorkItem
    return <WorkComponent {...workProps} />;
  } else if (props.type === 'publication') {
    const pubProps = props as PublishedWork
    return <PublicationComponent {...pubProps} />;
  } else {
    throw "Invalid timeline type"!
  }
};

export default (props: {event: CvInformation['timeline']}) => {
  return (
    <Section icon='timeline' sectionId="timeline"
             title="Timeline" subtitle="Events of my life">
      { props.event.map(MapToTimelineComponent) }
    </Section>
  );
};
