import React from 'react';
import { Link } from 'react-router-dom';
import {Button, ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import routes from '../constants/routes';

const repos = ['homepage-web', 'easy-git', 'storeloactor-git'];

export default class HomePage extends React.Component {

  render() {
    return (
      <div className="m-5">
        <h2>Git repositories</h2>
        <Button variant="info" className="my-2"><Link class="text-white" to={routes.ADDREPO}>Add New Repository</Link></Button>
        <ListGroup>
          {repos.map(repo => <ListGroup.Item key={repo}>{repo}</ListGroup.Item>)}
        </ListGroup>
      </div>
    );
  }
}
