import React from 'react';
import '../scss/styles.scss';
import aboutPic from '../assets/images/Ian-Pic.jpg';
import profile from '../assets/images/Profile-Picture.jpg';
import FCongress from '../assets/images/Finding-Congress-pic.jpg';
import GitHugged from '../assets/images/GitHugged-pic.jpg';
import jirn from '../assets/images/JIRN-pic.jpg';

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
          <div id="about-content">
            <div id="about-text-section">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <a href="https://docs.google.com/document/d/1GayiA_ACx7_AcshfhKQMUI0baChg7VatB6G-g12ISLc/edit?usp=sharing">View CV</a>
            </div>
            <img src={aboutPic}></img>
          </div>
        </div>
        <div id="portfolio-wrap">
          <div id="portfolio">
            <h1>Portfolio Pieces</h1>
            <span>Take a look at my work below.</span>
          </div>
          <div id="portfolio-list">
            <ul>
              <li>
                <div className="inner-list">
                  <div className="image-wrap">
                    <img src={FCongress}></img>
                  </div>
                  <div className="definitions-wrap">
                    <div className="date-wrap">
                      <p>January 22, 2018</p>
                    </div>
                    <div className="title-holder">
                      <h3>
                        <a href="/"></a>
                      </h3>
                    </div>
                    <div className="definition">
                      <p>If you are reading this, you probably plan to start a small business or a side hustle very soon. And you probably have ...</p>
                    </div>
                    <div className="read-more">
                      <a href="/">
                        <span>Read More</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
