import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"

import MainContainer from './components/main-container';
import MyAppBarAndDrawer, { sidebarComponents } from './components/my-app-bar-and-drawer'
import NavLinks from './components/nav-links'

import BioSection from './sections/bio'
import EducationSection from './sections/education'
import ExperienceSection from './sections/experience'
import SkillsSection from './sections/skills'
import PublishedWorkSection from './sections/published_work'
import ContactsSection from './sections/contacts'

import cv_data from './cv-data'
import useStyles from './styles'

export default () => {
   const classes = useStyles()

   return <React.Fragment>
            <MyAppBarAndDrawer position={cv_data.current_position}/>
            <MainContainer>
               <Grid container spacing={1} className={classes.content}>
                  <Hidden smDown>
                     <Grid item md={3} lg={2} className={classes.sidebar}>
                        <NavLinks/>
                     </Grid>
                  </Hidden>
                  <Grid item sm={12} md={9} lg={10} className={classes.sections}>
                     <BioSection short_bio={cv_data.short_bio} />
                     <EducationSection data={cv_data.education} />
                     <ExperienceSection data={cv_data.experience} />
                     <SkillsSection data={cv_data.skills} />
                     <PublishedWorkSection data={cv_data.published_works} />
                     <ContactsSection info={cv_data.contact_info} />
                  </Grid>
               </Grid>
            </MainContainer>
          </React.Fragment>
}
