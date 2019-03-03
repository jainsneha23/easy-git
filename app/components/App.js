import * as React from 'react';
import Header from './header/';

export default class App extends React.Component {

  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        <React.Fragment>{children}</React.Fragment>
      </div>
    );
  }
}
