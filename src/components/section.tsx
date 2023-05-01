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
  () => {
    document.getElementById('main-content')?.scroll({
      top:0, left:0,
      behavior: 'smooth'
    })
  }

export default (props: SectionProps) => 
  <section id={props.sectionId} className="section">
    <h1 className="title"> <span className='icon'> <FontAwesomeIcon icon={props.icon} /> </span> {props.title}</h1>
    <h2 className='subtitle'>{props.subtitle}</h2>
    <div className="contents">
      {props.children}
    </div>
    <a onClick={moveTop}>Move top <FontAwesomeIcon icon='arrow-up' /></a>
  </section>
