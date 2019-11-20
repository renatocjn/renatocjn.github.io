import React from 'react';
// import logo from './logo.svg';
import './App.css';

import MainContainer from './components/main-container';
import MyAppBarAndDrawer from './components/my-app-bar-and-drawer'

import BioSection from './sections/bio'
import EducationSection from './sections/education'
import ExperienceSection from './sections/experience'
import SkillsSection from './sections/skills'
import PublishedWorkSection from './sections/published_work'
import ContactsSection from './sections/contacts'

import cv_data from './cv-data'

export default () => (
   <MainContainer>
      <MyAppBarAndDrawer position={cv_data.current_position} />
      <BioSection short_bio={cv_data.short_bio} />
      <EducationSection data={cv_data.education} />
      <ExperienceSection data={cv_data.experience} />
      <SkillsSection data={cv_data.skills} />
      <PublishedWorkSection data={cv_data.published_works} />
      <ContactsSection info={cv_data.contact_info} />
   </MainContainer>
)
