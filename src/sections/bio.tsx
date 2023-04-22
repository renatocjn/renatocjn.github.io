import React from 'react';

import Section from '../components/section';
import { CvInformation } from '../data/models';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const avatarPic = new URL('/static/photo.jpg?as=webp', import.meta.url);

export default (props: {bio: string}) => {
  return (
    <Section
      sectionId="bio"
      title="Short Bio"
      icon='bars-staggered'
      subtitle="A short description of myself"
    >
      <img className='picture' src={avatarPic.toString()} />
      <p className='text'> {props.bio} </p>
    </Section>
  );
};
