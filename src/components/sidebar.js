import React from "react"

// import Paper from "@material-ui/core/Paper"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import Avatar from "@material-ui/core/Avatar"

import useStyles from '../styles'

import NavLinks from "./nav-links"
import ContactsList from './contacts'

export default props => {
   const classes = useStyles()
   return (
      <List className={classes.sidebar}>
         <Avatar className={[classes.Avatar, classes.sidebarAvatar]}
            variant='rounded' src='/avatar.jpg' alt="My Picture"/>
         <ContactsList info={props.contact_info} />
         <Divider className={classes.dividerWithPadding} light variant="middle"/>
         <NavLinks/>
      </List>
   )
}
