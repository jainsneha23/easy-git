import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Breadcrumb} from 'react-bootstrap';
import routes from '../constants/routes';

export default class AddRepo extends React.Component {

  render() {
    return (
      <div className="m-5">
        <Breadcrumb>
          <Breadcrumb.Item as="div">
            <Link to={routes.HOME}>Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Add Repository</Breadcrumb.Item>
        </Breadcrumb>
        
        <Button block variant="info" className="my-2">Git Clone</Button>
        <Button block variant="info" className="my-2">Git Init</Button>
        <Button block variant="info" className="my-2">Scan Directories</Button>
      </div>
    );
  }
}
