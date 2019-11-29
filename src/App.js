import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import Divider from "@material-ui/core/Divider"
import Paper from "@material-ui/core/Paper"
import List from "@material-ui/core/List"
import { ThemeProvider } from '@material-ui/core/styles';

import MainContainer from './components/main-container';
import MyAppBarAndDrawer, { sidebarComponents } from './components/my-app-bar-and-drawer'
import NavLinks from './components/nav-links'
import ContactsList from './components/contacts'

import BioSection from './sections/bio'
import EducationSection from './sections/education'
import ExperienceSection from './sections/experience'
import SkillsSection from './sections/skills'
import PublishedWorkSection from './sections/published_work'

import cv_data from './cv-data'
import useStyles, { theme } from './styles'

export default () => {
   const classes = useStyles()

   return <ThemeProvider theme={theme}>
            <MyAppBarAndDrawer position={cv_data.current_position} contact_info={cv_data.contact_info}/>
            <MainContainer>
               <Grid container spacing={1} className={classes.content}>
                  <Hidden smDown>
                     <Grid item md={3} lg={2}>
                        <Paper className={classes.sidebar}>
                           <List>
                              <NavLinks/>
                              <Divider />
                              <ContactsList info={cv_data.contact_info} />
                           </List>
                        </Paper>
                     </Grid>
                  </Hidden>
                  <Grid item sm={12} md={9} lg={10} className={classes.sectionsContainer}>
                     <BioSection short_bio={cv_data.short_bio} />
                     <EducationSection data={cv_data.education} />
                     <ExperienceSection data={cv_data.experience} />
                     <SkillsSection data={cv_data.skills} />
                     <PublishedWorkSection data={cv_data.published_works} />
                  </Grid>
               </Grid>
            </MainContainer>
          </ThemeProvider>
}
