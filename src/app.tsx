import React from 'react';

import cv_data from './data/cv-data'
import Hero from './sections/hero'
import Bio from './sections/bio'
import Skills from './sections/skills'
import Timeline from './sections/timeline'
import Footer from './components/footer'

import NavLinks from './components/nav-links'
import Contacts from './components/contacts'

export default () => {
  return (
    <div id="main-container">
      <NavLinks />
      <div id="main-content">
        <Hero full_name={cv_data.full_name} two_liner={cv_data.two_liner}/>
        <Bio bio={cv_data.bio} />

        <Skills list={cv_data.skills} />
        <Timeline event={cv_data.timeline} />
      </div>
      <Contacts {...cv_data.contact_info}/>
      <Footer />
    </div>
  );
};
