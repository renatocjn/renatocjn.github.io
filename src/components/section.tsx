import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactNode } from 'react';

interface SectionProps {
  sectionId: string
  title: string
  subtitle: string
  icon: IconProp
  children: ReactNode
}

const moveTop = 
  () => scroll({
    top:0, left:0,
    behavior: 'smooth'
  })

export default (props: SectionProps) => 
  <section id={props.sectionId} className="section">
    <span className='icon'> <FontAwesomeIcon icon={props.icon} /> </span>
    <h1 className="title">{props.title}</h1>
    <h2 className='subtitle'>{props.subtitle}</h2>
    <div className="contents">
      {props.children}
    </div>
    <a onClick={moveTop}>Move top <FontAwesomeIcon icon='up' /></a>
  </section>
