import React, {Component} from "react";

export default class AppFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-footer container-fluid">
        <div className='row justify-content-center'>
          <h4 className='white-text'>Brandon <span>Watts</span></h4>
        </div>
        <div className='row justify-content-center'>
          <ul className="list-inline">
            <li className="list-inline-item faded-white">Contact</li>
            <li className="list-inline-item faded-white">Portfolio</li>
            <li className="list-inline-item faded-white">About Me</li>
          </ul>
        </div>
      </div>
    );
  }
}
