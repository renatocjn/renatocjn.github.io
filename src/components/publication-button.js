import React from 'react'

import Button from '@material-ui/core/Button';

import useStyles from "../styles"

export default props => {
  const classes = useStyles()
  const {type, link} = props
  let classToBeUsed

  if (type === 'pdf') {
    classToBeUsed = classes.pdf_pub_button
  } else if (type === 'ieeexplore') {
    classToBeUsed = classes.ieee_pub_button
  } else {
    classToBeUsed = classes.other_pub_button
  }

  return (
    <Button href={link} className={classToBeUsed}
      disableElevation size='small'>{type}</Button>
  )
}
