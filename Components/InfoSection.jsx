import React, {Component} from "react";

export default class InfoSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className='row justify-content-center'>
          <img className='img-circular'></img>
        </div>
        <div className='row justify-content-center'>
          <h4>Brandon Watts</h4>
        </div>
        <div className='row justify-content-center'>
          <p className='faded'>Solutions Developer</p>
        </div>
        <div className='row text-center justify-content-center'>
          <div className='col-8'>
            <p className='faded my-3'>
              Quisque posuere egestas rutrum. Mauris in scelerisque orci. Etiam vestibulum tellus tincidunt nulla aliquet, vel ultrices nulla porttitor. Curabitur rutrum velit vitae erat tincidunt aliquet. Nullam turpis justo, suscipit quis efficitur vitae, tempor eget tellus. Duis commodo euismod ultrices.r
            </p>
          </div>
        </div>
        <div className='row justify-content-center'>
          <button className='btn mt-4 text-center' style={{backgroundColor:"#76313F"}}>
            <p className='white-text' style={{margin:"0 35px 0 35px"}}>Read More</p>
          </button>
        </div>
      </div>
    );
  }
}
