import React, { Component } from 'react';

class Splash extends Component {

  render() {
    return (
      <div className={this.props.className}>
        <h2>MUI02 Example</h2>

        <div className="row">
          <div className="col-md-4">
            Uses React for presentation
          </div>
          <div className="col-md-4">
            Uses Redux for data management
          </div>
          <div className="col-md-4">
            Uses Node backend, with NEDB as proxy database
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
