import React, { useState } from 'react';

import { PublishedWork } from '../data/models'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default (props: PublishedWork) => {
  const [ expanded, setExpanded ] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded)

  const blur = () => { setExpanded(false); }
  const click = () => { setExpanded(false); }

  const classes = [
    'publication', 
    expanded ? 'expanded' : ''
  ].join(' ')

  return (
    <div className={classes} onBlur={blur} onClick={click}>
      <h3> {props.title} </h3>
      <dl>
        <dt> Authors: </dt>
        <dd> {props.authors.join('; ')} </dd>
        
        <dt> Venue: </dt>
        <dd> {props.venue} </dd>
        
        <dt> Location: </dt>
        <dd> {props.location} </dd>
        
        <dt> Year: </dt>
        <dd> {props.year} </dd>
      </dl>
      <button onClick={toggleExpanded}> <FontAwesomeIcon icon='plus' /> </button>
      <div className='detailed'> {props.detailed} </div>
    </div>
  );
};
