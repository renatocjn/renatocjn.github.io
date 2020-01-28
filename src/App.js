import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import Paper from "@material-ui/core/Paper"
import { ThemeProvider } from '@material-ui/core/styles';

import MainContainer from './components/main-container';
import MyAppBarAndDrawer from './components/my-app-bar-and-drawer'
import SideBar from "./components/sidebar"

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
                     <Grid item md={3}>
                        <Paper className={classes.sidebar}>
                           <SideBar contact_info={cv_data.contact_info} />
                        </Paper>
                     </Grid>
                  </Hidden>
                  <Grid item sm={12} md={9} className={classes.sectionsContainer}>
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
