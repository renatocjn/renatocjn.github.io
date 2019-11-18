import React from 'react';
// import logo from './logo.svg';
import './App.css';

import MainContainer from './components/main-container';
import MyAppBarAndDrawer from './components/my-app-bar-and-drawer'

import BioSection from './sections/bio'
import EducationSection from './sections/education'

export default () => (
   <MainContainer>
      <MyAppBarAndDrawer />
      <BioSection />
      <EducationSection />
   </MainContainer>
)
