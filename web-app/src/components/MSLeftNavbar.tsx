import * as React from 'react';
import { Nav} from 'reactstrap';

export default class MSLeftNavbar extends React.Component {

    private openUploadDialog = () => {
      alert ('upload!')
    }

    render() {
      return (
        <Nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
          <div className="btn-group mr-2">
            <textarea name="telemetryJson" id="telemetryJson" cols={30} rows={10}></textarea>
          </div>
          <br/>
          <button className="btn btn-primary" onClick={this.openUploadDialog} type="submit">Upload Telemetry</button>
          </div>
        </Nav>
      );
  }
}