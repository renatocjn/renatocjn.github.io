import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default () => {
  return (
    <footer>
      <span>
        <FontAwesomeIcon icon='fa-brands fa-github' />
        <a target="_blank" href="https://github.com/renatocjn/renatocjn.github.io"> Source code </a>
      </span>
      <span>
        &copy; 2020
      </span>
    </footer>
  );
};
