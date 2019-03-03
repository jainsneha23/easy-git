import * as React from 'react';
import {Navbar} from 'react-bootstrap';

export default class Header extends React.Component {

  render() {
    return (
      <Navbar variant="dark" style={{background: '#17a2b8'}}>
      <Navbar.Brand href="#">Easy Git</Navbar.Brand>
      </Navbar>
    );
  }
}
