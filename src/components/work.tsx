import React, { useState } from 'react';

import { WorkItem } from '../data/models';

export default (props: WorkItem) => {
   const [ expanded, setExpanded ] = useState(false)

   const click = () => setExpanded(true)
   const blur = () => setExpanded(false)

   const classes = [
      'work',
      expanded ? 'expanded' : ''
   ].join(' ')

   return (
      <div className={classes} onClick={click} onBlur={blur}>
         <h3 className='position'> {props.position} </h3>
         <h4 className='company'> {props.company} </h4>
         <span className='start'> {props.dateStart} </span>
         { props.dateEnd && <span className='end'> {props.dateEnd} </span> }
         { props.activities && <ul>
            { props.activities.map((txt, idx) => <li key={idx}> {txt} </li>) }
         </ul> }
      </div>
   )
}
