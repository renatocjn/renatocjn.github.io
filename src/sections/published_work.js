import React from 'react';

import Section from '../components/section';
import Grid from "@material-ui/core/Grid"

import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PublicationCard from '../components/publication-card';

export default props => {
  const sortedPubList = props.data.sort((a, b) => (a.year < b.year))

  return (
    <Section sectionId="published_work" title="Published Work"
      subtitle="My academic publications" icon={<LibraryBooksIcon/>}>
      <Grid container spacing={1}>
        { sortedPubList.map(pub => (
          <Grid item md={12} lg={6}>
            <PublicationCard {...pub} />
          </Grid>
        )) }
      </Grid>
    </Section>
  )
}
