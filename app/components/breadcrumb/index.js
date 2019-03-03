import * as React from 'react';
import {Breadcrumb} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class BreadCrumb extends React.Component {

  render() {
    const { data } = this.props;
    return (
      <Breadcrumb>
        {data && data.map((item) => (
          <Breadcrumb.Item as="div" active={item.active}>
            {!item.active
              ?
              <Link to={item.link}>{item.text}</Link>
              :
              <span>{item.text}</span>
            }

          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    );
  }
}
