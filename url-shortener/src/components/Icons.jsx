import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Icons() {
  return (
    <div>
      <a href="mailto:varmamohit122@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} className="social-icons" />
      </a>
      <a
        href="https://www.linkedin.com/in/mohit-varma-043230195/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} className="social-icons" />
      </a>
      <a href="https://github.com/n0IQ" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} className="social-icons" />
      </a>
    </div>
  );
}

export default Icons;
