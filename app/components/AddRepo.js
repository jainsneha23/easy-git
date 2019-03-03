import React from 'react';
import {Button} from 'react-bootstrap';
import routes from '../constants/routes';
import BreadCrumb from './breadcrumb';

export default class AddRepo extends React.Component {

  render() {
    const breadcrumb = [
      {
        id: 'some-id',
        link: routes.HOME,
        text: 'Home',
        active: false
      },
      {
        id: 'some-id-2',
        link: '',
        text: 'Add Repo',
        active: true
      }
    ];
    return (
      <div>
        <BreadCrumb data={breadcrumb}/>
        <div className="m-5">
          <Button block variant="info" className="my-2">Git Clone</Button>
          <Button block variant="info" className="my-2">Git Init</Button>
          <Button block variant="info" className="my-2">Scan Directories</Button>
        </div>
      </div>
    );
  }
}
