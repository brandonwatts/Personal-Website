import React, {Component} from "react";
import NavBar from './NavBar.jsx';

export default class LeadIn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="lead-in container-fluid">
        <NavBar/>
        <div className='row text-center'>
          <div className='col-12'>
            <h2 className='white-text'>Im Brandon Watts.</h2>
          </div>
          <div className='col-12'>
            <p className='white-text'>I develop solutions, not software.</p>
          </div>
        </div>
        <div className='row'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill="white" points="0,0 0,100 100,100"/>
          </svg>
        </div>
      </div>
    );
  }
}
