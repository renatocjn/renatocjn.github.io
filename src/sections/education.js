import React from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'

import EducationEntry from '../components/education-entry'

export default props => (
   <Paper id="education-section" className="section">
      <Grid container spacing={2}>
         <Grid item xs={12}>
            <Typography variant="h6">Education</Typography>
         </Grid>

         <Grid item xs={12} sm={6} md={4} lg={3}>
            <EducationEntry begin={2010} end={2014}
               titleName="License" titleNameComplement="Computer Science"
               school="Federal University of Ceará"
               avatar={<Avatar src="/avatar_ufc.png"/>} />
         </Grid>

         <Grid item xs={12} sm={6} md={4} lg={3}>
            <EducationEntry begin={2015} end={2017}
               titleName="Master" titleNameComplement="Computer Science"
               school="Federal University of Ceará"
               avatar={<Avatar src="/avatar_ufc.png"/>}/>
         </Grid>

         <Grid item xs={12} sm={6} md={4} lg={3}>
            <EducationEntry begin={2019}
               titleName="PhD" titleNameComplement="Computer Networks"
               school="Université de Strasbourg"
               avatar={<Avatar src="/avatar_unistra.png"/>}/>
         </Grid>
      </Grid>
   </Paper>
)
