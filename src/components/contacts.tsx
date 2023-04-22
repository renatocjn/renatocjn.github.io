import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContactInfo } from '../data/models';

export default (props: ContactInfo) => 
  <ul className='contact-list'>
    <li>
      <span className='icon'> <FontAwesomeIcon icon='envelope'/> </span>
      <a href={`mailto:${props.email}`}> {props.email} </a>
    </li>

    {props.phone_number && <li>
      <span className='icon'> <FontAwesomeIcon icon='phone' /> </span>
      <label> {props.phone_number} </label>
    </li>}

    <li>
      <span className='icon'> <FontAwesomeIcon icon='github' /> </span>
      <a href={props.github}> My GitHub Profile </a>
    </li>

    <li>
      <span className='icon'> <FontAwesomeIcon icon='location-dot' /> </span>
      <label> {props.address}</label>
    </li>
  </ul>
