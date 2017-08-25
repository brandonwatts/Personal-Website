import React, {Component} from "react";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row nav-row">
        <div className='col-2'>
          <p>Brandon Watts</p>
        </div>
        <div className='col-10 '>
            <ul className="list-inline float-right">
            <li className="list-inline-item">
              About Me
            </li>
            <li className="list-inline-item">
              Porfolio
            </li>
            <li className="list-inline-item">
              Contact
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
