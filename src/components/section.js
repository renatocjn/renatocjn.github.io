import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import Avatar from "@material-ui/core/Avatar"
import Hidden from "@material-ui/core/Hidden"

import useStyles from '../styles'

export default props => {
   const classes = useStyles()
   return <Card id={props.sectionId} className={classes.section}>
            <CardHeader title={props.title} subheader={<Hidden xsDown>{props.subtitle}</Hidden>}
                classes={{title:classes.sectionTitle, subheader: classes.sectionSubheader}}
                avatar={<Avatar className={classes.sectionAvatar}>{props.icon}</Avatar>} />
            <CardContent class={classes.sectionContents} className={classes.sectionContent}>
               {props.children}
            </CardContent>
          </Card>
}
