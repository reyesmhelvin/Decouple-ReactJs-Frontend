import React from 'react';
import { Jumbotron } from 'reactstrap';
import { resourcesLinks } from './api'

const Footer = (props) => {
  return (
    <div className="footer">
      <Jumbotron>
        <hr className="my-2" />
        <p><a href={resourcesLinks.doc} target="_blank">Documentation</a>
         | <a href={resourcesLinks.frontendRepo} target="_blank">Frontend Repo</a>
         | <a href={resourcesLinks.backendRepo} target="_blank">Backend Repo</a>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Footer;