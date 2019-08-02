import React from 'react';
import '../scss/styles.scss';
import profile from '../assets/images/Profile-Picture.jpg';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="home">
        <div id="top-section">
          <div id="header-wrap">
            <div id="box-wrap">
              <div id="bg-wrap">
              </div>
              <div id="content">
                <div id="inner-content">
                  <div id="image-wrap">
                    <img src={profile} alt="A picture of Ian Cook Westgate"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="about-me">
          <h1>About Me</h1>
        </div>
      </div>
    );
  }
}

export default Home;
