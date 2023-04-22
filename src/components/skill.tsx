import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Skill } from '../data/models';

const progressIcons = {
  'Beginner': <FontAwesomeIcon icon='star-sharp-half' />,
  'Intermediary': <FontAwesomeIcon icon='star-sharp' />,
  'Advanced': <FontAwesomeIcon icon="star-sharp"/>,
};

export default function SkillItem(skill: Skill) {
  return (
    <div className='skill'>
      <h3> {progressIcons[skill.level]} {skill.name} </h3>
      <div className='detailed'>
        <h3>{skill.name}</h3>
        <p>{skill.detailed}</p>
      </div>
    </div>
  );
}
