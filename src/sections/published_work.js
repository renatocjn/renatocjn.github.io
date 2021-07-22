import React from 'react';

import Grid from '@material-ui/core/Grid';

import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import Section from '../components/section';
import PublicationCard from '../components/publication-card';

import useStyles from '../styles';

export default (props) => {
  const sortedPubList = props.data.sort((a, b) => (a.year < b.year));
  const classes = useStyles();

  return (
    <Section
      sectionId="published_work"
      title="Published Work"
      subtitle="My academic publications"
      icon={<LibraryBooksIcon />}
    >
      <Grid container spacing={1} className={classes.publication_card_container}>
        { sortedPubList.map((pub) => (
          <Grid item md={12} lg={6}>
            <PublicationCard {...pub} />
          </Grid>
        )) }
      </Grid>
    </Section>
  );
};
