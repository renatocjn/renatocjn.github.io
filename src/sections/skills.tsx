import React from 'react';

import Section from '../components/section';
import SkillComponent from '../components/skill';

import { Skill } from '../data/models';

export default (props: {list: Skill[]}) => {
  const sortedSkillList = props.list.sort((a, b) => ((a.level < b.level) ? 1 : -1));

  return (
    <Section icon='gears' sectionId="skills"
             title="Skills" subtitle="What I can do">
      { sortedSkillList.map(skill => <SkillComponent {...skill} /> )}
    </Section>
  );
};
