import React from 'react'

interface Props {
  full_name: string
  two_liner: string
}

export default (props: Props) => (
  <div className='hero'>
    <span className='name'> {props.full_name} </span>
    <span className='two-liner'> {props.two_liner} </span>
  </div>
)
