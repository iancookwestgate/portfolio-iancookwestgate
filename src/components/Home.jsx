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
      <div>

        <div className="bg-nvy navbar">
          <div id="internal-menu">
            <a href="#"><p>Home</p></a>
            <a href="#"><p>About</p></a>
            <a href="#"><p>Portfolio</p></a>
            <a href="#"><p>Contact</p></a>
          </div>
        </div>
        <div id="home">
          <div id="top-section">
            <div id="header-wrap">
              <div id="box-wrap">
                <div id="bg-wrap">
                  <div className="darken-overlay">
                  </div>
                </div>
                <div id="content">
                  <div id="inner-content">
                    <div id="image-wrap">
                      <img src={profile} alt="A picture of Ian Cook Westgate"></img>
                    </div>
                    <div id="name-holder">
                      <h3>
                        Ian Cook Westgate
                      </h3>
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
            </div>
            <div id="portfolio-list">
              <ul>
                <li>
                  <div className="inner-list">
                    <div className="image-wrap">
                      <a href="https://github.com/iancookwestgate/Finding-Congress">
                        <img src={FCongress}></img>
                      </a>
                    </div>
                    <div className="definitions-wrap">
                      <div className="date-wrap">
                        <p><em>Finding Congress</em> - August 1, 2019</p>
                      </div>
                      <div className="title-holder">
                        <h3>
                          <a href="/"></a>
                        </h3>
                      </div>
                      <div className="definition">
                        <p>Uses the ProPublica Congress API & News API within a minimalist website that permits the user to seek curated news based on a state's congressmen, women, and a political issue of their choice.</p>
                      </div>
                      <div className="read-more">
                        <a href="https://github.com/iancookwestgate/Finding-Congress">
                          <span>Project Details</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="inner-list">
                    <div className="image-wrap">
                      <a href="https://github.com/iancookwestgate/GitHugged">
                        <img src={GitHugged}></img>
                      </a>
                    </div>
                    <div className="definitions-wrap">
                      <div className="date-wrap">
                        <p><em>GitHugged</em> - May 9, 2019</p>
                      </div>
                      <div className="title-holder">
                        <h3>
                          <a href="/"></a>
                        </h3>
                      </div>
                      <div className="definition">
                        <p>I helped program this team project featuring a website that allows the user to write blog posts about their GitHub repositories. Access to GitHub's API makes it all possible.</p>
                      </div>
                      <div className="read-more">
                        <a href="https://github.com/iancookwestgate/GitHugged">
                          <span>Project Details</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div id="third-piece" className="inner-list">
                    <div className="image-wrap">
                      <a href="https://github.com/iancookwestgate/JIRN">
                        <img src={jirn}></img>
                      </a>
                    </div>
                    <div className="definitions-wrap">
                      <div className="date-wrap">
                        <p><em>JIRN.com</em> - February 7, 2019</p>
                      </div>
                      <div className="title-holder">
                        <h3>
                          <a href="/"></a>
                        </h3>
                      </div>
                      <div className="definition">
                        <p>I assisted programming this website for easily giving a user access to a prepared list of restaurants & their information throughout the Portland area.</p>
                      </div>
                      <div className="read-more">
                        <a href="https://github.com/iancookwestgate/JIRN">
                          <span>Project Details</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="contact">
            <div className="contact-title">
              <h1>Contact Me</h1>
            </div>
            <div className="contact-wrapper-all">
              <div className="contact-wrapper">
                <div className="box-section">
                  <div className="short-info">
                    <ul>
                      <li>
                        <p>
                          <label>Email:</label>
                          <span>
                            <a href="mailto:iancookwestgate@gmail.com">iancookwestgate@gmail.com</a>
                          </span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <label>LinkedIn:</label>
                          <span>
                            <a href="https://www.linkedin.com/in/ian-cook-westgate/">linkedin.com/in/ian-cook-westgate/</a>
                          </span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <label>Phone:</label>
                          <span>(903)486-7790</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <label>GitHub:</label>
                          <span>
                            <a href="https://github.com/iancookwestgate">iancookwestgate</a>
                          </span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-section">
            <div className="container">
              <p>Copyright 2019. All Rights are Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
