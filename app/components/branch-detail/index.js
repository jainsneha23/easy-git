import * as React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import routes from '../../constants/routes';
import BreadCrumb from '../breadcrumb/';
import List from '../list';
import './style.css';

export default class BranchDetail extends React.Component {

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
        text: 'Repo Name',
        active: false
      },
      {
        id: 'some-id-3',
        link: '',
        text: 'Branch Name',
        active: true
      }
    ];
    return (
      <div>
        <BreadCrumb data={breadcrumb}/>
        <Container>
          <Row>
            <Col className="padding-0">
             <Container>
              <Row>
                <Col className="column" sm={12}>
                <div className="border">
                  <h6 className="title">Stage Files</h6>
                  <div className="body">
                   <List />
                  </div>
                </div>
                </Col>
                <Col className="column" sm={12}>
                <div className="border">
                  <h6 className="title">Un-Staged Files</h6>
                  <div className="body">
                    <List />
                  </div>
                </div>
                </Col>
              </Row>
             </Container>
            </Col>
            <Col className="column" sm={8} md={8} lg={8}>
            <div className="border" style={{height: '100%'}}>
              <h6 className="title">Diffing</h6>
              <div className="body img">
                <img src="1.png" />
              </div>
            </div>
            </Col>
            <Col className="column" sm={12}>
            <div className="border" style={{height: '100%'}}>
              <h6 className="title">Commit/Push</h6>
              <div className="body">
                Pending...
              </div>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
