import * as React from 'react';
import './App.css';

import MSTopNavbar from './components/MSTopNavbar';
import MSLeftNavbar from './components/MSLeftNavbar';
import MSMain from './components/MSMain';

class App extends React.Component {
  public render() {
    return (
      <div>
        <MSTopNavbar />
        <div className="container-fluid">
          <div className="row">
            <MSLeftNavbar />
            <MSMain />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
