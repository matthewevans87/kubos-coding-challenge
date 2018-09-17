import * as React from 'react';
import { Nav} from 'reactstrap';

export default class MSTopNavbar extends React.Component {
    render() {
      return (
          <Nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Moon Shots</a>
          </Nav>
      );
    }
  }
