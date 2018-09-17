import * as React from 'react';
import MSSatelliteTable from './MSSatelliteTable';

export default class MSMain extends React.Component {
    render() {
      return (
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
        <MSSatelliteTable />
      </main>
      );
    }
  }
