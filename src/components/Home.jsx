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
          <h1>Home component!</h1>
          <div class="image-wrap">
            <img src={profile} alt="A picture of Ian Cook Westgate"></img>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
