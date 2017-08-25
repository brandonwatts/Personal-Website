import React, {Component} from "react";

export default class AppFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-footer container-fluid">
        <div className='row justify-content-center'>
          <p className='white-text'>Brandon Watts</p>
        </div>
        <div className='row justify-content-center'>
          <ul className="list-inline">
            <li className="list-inline-item white-text">Contact</li>
            <li className="list-inline-item white-text">Portfolio</li>
            <li className="list-inline-item white-text">About Me</li>
          </ul>
        </div>
      </div>
    );
  }
}
