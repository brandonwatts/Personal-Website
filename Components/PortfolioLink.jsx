import React, {Component} from "react";

export default class PortfolioLink extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="portfolio-link container-fluid">
        <div className='row'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill="white" points="0,0 100,0 100,100"/>
          </svg>
        </div>
        <div className='row text-center'>
          <div className='col-12'>
            <h1 className='white-text'>My Portfolio</h1>
          </div>
          <div className='col-12'>
            <p className='white-text'>I worked for such companies as Carmax and Unos.</p>
          </div>
        </div>
        <div className='row justify-content-center'>
          <button className='btn btn-primary mt-4'>
            <p className='white-text' style={{margin:"0 35px 0 35px"}}>Read More</p>
          </button>
        </div>
        <div className='row'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill="black" points="0,0 0,100 100,100"/>
          </svg>
        </div>
      </div>
    );
  }
}
