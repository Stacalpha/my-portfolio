import React from 'react';
import './landing.component.scss';
import reactLogo from '../logo.svg';

class Landing extends React.Component {
  /*constructor(props) {
    super(props);
  }*/

  render() {
    let position = this.props.status.position;

    return (
      <section id="landing-section" className={`slides ${position}-slides`} onClick={this.props.onClick}>
        <div id="landing-top-cutout">
          <span></span>
        </div>

        <img id="app-dp" src="/me2.jpg" alt="Me in a blue suit." title="A picture of me in a blue suit." />
        <small>Web Developer</small>

        <h1>
          Hi! I'm Fẹranmi.<br />I build responsive Web Apps.<br />
          <small>And with Electron.js, I develop desktop apps too.</small>
        </h1>

        <p>
          I work with some popular web technologies to creatively bring ideas to live.
          <small>
            Click any of the icons to &nbsp;
            <a href="https://app.pluralsight.com/profile/feranmi-akinlade" target="_blank" rel="noopener noreferrer">
              view details
            </a>
          </small>
        </p>

        <div id="skills-list">
          <div>
            <a href="https://app.pluralsight.com/profile/feranmi-akinlade" target="_blank" rel="noopener noreferrer">
              <img alt="Angular Logo" title="Angular" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==" />
              <span>Angular</span>
            </a>
            <a href="https://app.pluralsight.com/profile/feranmi-akinlade" target="_blank" rel="noopener noreferrer">
              <img src="/icons/typescript.png" alt="TypeScript.png" title="TypeScript" />
              <span>TypeScript</span>
            </a>
            <a href="https://app.pluralsight.com/profile/feranmi-akinlade" target="_blank" rel="noopener noreferrer">
              <img src="/icons/sass.png" alt="Sass Logo" title="Less" />
              <span>Less</span>
            </a>
          </div>

          <div>
            <a href="https://app.pluralsight.com/profile/feranmi-akinlade" target="_blank" rel="noopener noreferrer">
              <img src={reactLogo} alt="React Logo" title="React" />
              <span>React</span>
            </a>
            <a href="https://app.pluralsight.com/profile/feranmi-akinlade" target="_blank" rel="noopener noreferrer">
              <img src="/icons/javascript.png" alt="JavaScript Logo" title="JavaScript" />
              <span>JavaScript</span>
            </a>
            <a href="https://app.pluralsight.com/profile/feranmi-akinlade" target="_blank" rel="noopener noreferrer">
              <img src="/icons/css3.png" alt="CSS3 Logo" title="CSS 3" />
              <span>CSS</span>
            </a>
            <a href="https://app.pluralsight.com/profile/feranmi-akinlade" target="_blank" rel="noopener noreferrer">
              <img src="/icons/html5.png" alt="HTML5 Logo" title="HTML 5" />
              <span>HTML</span>
            </a>
          </div>

          <div>
            <a href="https://app.pluralsight.com/profile/feranmi-akinlade" target="_blank" rel="noopener noreferrer">
              <img src="/icons/electron.png" alt="Electron.js Logo" title="Electron.js" />
              <span>Electron.js</span>
            </a>
            <a href="https://app.pluralsight.com/profile/feranmi-akinlade" target="_blank" rel="noopener noreferrer">
              <img src="/icons/nodejs.png" alt="Node.js Logo" title="Node.js" />
              <span>Node.js</span>
            </a>
            <a href="https://app.pluralsight.com/profile/feranmi-akinlade" target="_blank" rel="noopener noreferrer">
              <img src="/icons/expressjs.png" alt="Express.js Logo" title="Express.js" />
              <span>Express.js</span>
            </a>
          </div>
        </div>

        <address>
          <div id="contact-infos">
            <a href="tel:+2348179925186" id="whatsapp-contact">
              <img src="/icons/whatsapp.png" alt="Contact me on WhatsApp" />
            </a>
            <a href="tel:+2348179925186" id="phone-contact">
              <img src="/icons/gsm.png" alt="Contact me via SMS" />
            </a>
            <a href="mailto:feranmiakinlade@gmail.com" id="email-contact">
              <img src="/icons/email.png" alt="Send me an email" />
            </a>
          </div>
          <div id="profile-links">
            <a href="https://github.com/stacalpha" id="github-profile"
               target="_blank" rel="noopener noreferrer">
              <img src="/icons/github.png" alt="Check out my GitHub profile" />
            </a>
            <a href="https://stackoverflow.com/users/story/7665742" target="_blank"
               rel="noopener noreferrer" id="stackoverflow-dev-story">
              <img src="/icons/stackoverflow.png" alt="My developer story - Stack Overflow" />
            </a>
            <a href="https://www.linkedin.com/in/akinlade-feranmi-0b6bbb170"
               target="_blank" rel="noopener noreferrer" id="linkedin-profile">
              <img src="/icons/linkedin.png" alt="View my LinkedIn profile" />
            </a>
          </div>
        </address>
      </section>
    );
  }
}
//https://github.com/Stacalpha/my-portfolio.git

export default Landing;