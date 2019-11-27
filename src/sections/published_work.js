import React from 'react';

import Section from '../components/section';
import PublishedWorkEntry from '../components/published-work-entry'

import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

export default props => (
   <Section sectionId="published_work" title="Published Work"
      subtitle="My academic publications" icon={<LibraryBooksIcon/>}>
   TODO
      {/*props.data.map((pub, idx) => (
         <PublishedWorkEntry key={idx} {...pub} />
      )*/}
   </Section>
)
