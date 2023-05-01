import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContactInfo } from '../data/models';

export default (props: ContactInfo) => 
  <section id='contact-list'>
    <div>
      <span className='icon'> <FontAwesomeIcon icon='envelope'/> </span>
      <a href={`mailto:${props.email}`}> {props.email} </a>
    </div>

    {props.phone_number && <div>
      <span className='icon'> <FontAwesomeIcon icon='phone' /> </span>
      <label> {props.phone_number} </label>
    </div>}

    <div>
      <span className='icon'> <FontAwesomeIcon icon='fa-brands fa-github' /> </span>
      <a href={props.github}> My GitHub Profile </a>
    </div>

    <div>
      <span className='icon'> <FontAwesomeIcon icon='location-dot' /> </span>
      <label> {props.address}</label>
    </div>
  </section>
