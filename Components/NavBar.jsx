import React, {Component} from "react";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row nav-row">
        <div className='col-2'>
          <h4 className='white-text'>Brandon <span>Watts</span></h4>
        </div>
        <div className='col-10 '>
            <ul className="list-inline float-right">
            <li className="list-inline-item">
              <p className='white-text'>About Me</p>
            </li>
            <li className="list-inline-item">
                <p className='white-text'>Porfolio</p>
            </li>
            <li className="list-inline-item">
                <p className='white-text'>Contact</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
