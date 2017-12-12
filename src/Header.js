import React from 'react';
import logo from './logo.png';
import {Jumbotron} from 'reactstrap';

const Header = (props) => {
  return (
    <div>
      <Jumbotron>
        <img src={logo} alt={props.logoname}/>
        <h1 className="display-3">Register Now!</h1>
        <p className="lead">Crunch more kilometers with RaceYaya.</p>
        <hr className="my-2" />
        <p>This is a Decoupled Architecture with Wordpress</p>
      </Jumbotron>
    </div>
  );
};

export default Header;