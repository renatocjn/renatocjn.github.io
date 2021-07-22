import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { ThemeProvider } from '@material-ui/core/styles';

import MainContainer from './components/main-container';
import MyAppBarAndDrawer from './components/my-app-bar-and-drawer';
import SideBar from './components/sidebar';
import Footer from './components/footer';

import BioSection from './sections/bio';
// import EducationSection from './sections/education'
// import ExperienceSection from './sections/experience'
import TimelineSection from './sections/timeline';
import SkillsSection from './sections/skills';
import PublishedWorkSection from './sections/published_work';

import cv_data from './cv-data';
import useStyles, { theme } from './styles';

export default () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <MyAppBarAndDrawer position={cv_data.current_position} contact_info={cv_data.contact_info} />
      <MainContainer className={classes.mainComponent}>
        <Grid container spacing={1} className={classes.content}>
          <Hidden smDown>
            <Grid item md={3}>
              <Paper className={classes.sidebar} elevation={0}>
                <SideBar contact_info={cv_data.contact_info} />
              </Paper>
            </Grid>
          </Hidden>
          <Grid item sm={12} md={9} className={classes.sectionsContainer}>
            <BioSection short_bio={cv_data.short_bio} />
            <Divider className={classes.dividerWithPadding} variant="middle" />
            <TimelineSection timeline_data={cv_data.timeline} />
            <Divider className={classes.dividerWithPadding} variant="middle" />
            {/* <EducationSection data={cv_data.education} />
                     <Divider variant="middle"/>
                     <ExperienceSection data={cv_data.experience} />
                     <Divider variant="middle"/> */}
            <SkillsSection data={cv_data.skills} />
            <Divider className={classes.dividerWithPadding} variant="middle" />
            <PublishedWorkSection data={cv_data.published_works} />
          </Grid>
        </Grid>
      </MainContainer>
      <Footer />
    </ThemeProvider>
  );
};
