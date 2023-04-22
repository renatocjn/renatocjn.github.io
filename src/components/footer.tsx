import React from 'react';

import package_info from '../../package.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default () => {
  return (
    <footer>
      <span>
        <FontAwesomeIcon icon='github' />
        <a href={package_info.repository.url}> Source code </a>
      </span>
      <span>
        &copy; 2020
      </span>
    </footer>
  );
};
