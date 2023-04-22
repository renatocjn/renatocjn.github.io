import React from 'react';
import { EducationItem } from '../data/models';

export default (props: EducationItem) => {
   return (
      <div className='education'>
         <h3 className='title'> {props.title} </h3> 
         <h4 className='school'> {props.school} </h4>
         <h4 className='area'> {props.study_area} </h4>
         <h4 className='location'> {props.location} </h4>
         <span className='start'> {props.dateStart} </span>
         <span className='end'> {props.dateEnd} </span>
         <div className='detailed'> {props.detailed} </div>
      </div>
   )
}
