import React from 'react';
import './discography.component.scss';

class Discography extends React.Component {
  render() {
    let position = this.props.status.position;

    return (
      <section id="discography-slide" className={`slides ${position}-slides`} onClick={this.props.onClick}>
        <h1 className="flex-box-vert">
          Here are some of my recent projects.
        </h1>

        <div id="project-cards-container">
          <div className="flex-box-vert">
            <a href="http://promavin.com"
              className="polaroid project-card"
              target="_blank" rel="noopener noreferrer">
              <img src="/promavin.screenshot.png"
                  alt="Screenshot of promavin.com"
                  className="polaroid-img" />
              <small className="polaroid-bezel flex-box-vert">
                <span className="fade-out-mask-top"></span>
                <h2>promavin.com</h2>
                <span className="half-line-break"></span>
                <span>Responsive website built with Angular</span>
              </small>
            </a>

            <a href="https://github.com/stacalpha/sky-stream"
              className="polaroid project-card"
              target="_blank" rel="noopener noreferrer">
              <img src="/skystream.screenshot.png"
                  alt="Screenshot of Media Player"
                  className="polaroid-img" />
              <small className="polaroid-bezel flex-box-vert">
                <h2>Media Player</h2>
                <span className="half-line-break"></span>
                <span>Cross-platform desktop app built with Node.js using the Electron.js framework.</span>
              </small>
            </a>

            <button className="polaroid project-card" onClick={this.recursionClicked}>
              <img src="/portfolio.screenshot.png"
                  alt="Screenshot of My Portfolio"
                  className="polaroid-img" />
              <small className="polaroid-bezel flex-box-vert">
                <h2>My Portfolio.</h2>
                <span className="half-line-break"></span>
                <span>
                  Built with React, <br />and a little bit of recursion ;-)
                </span>
              </small>
            </button>
            <div className="scroll-padding"></div>
          </div>

          <div className="scroll flex-box-vert"><span>scroll</span></div>
        </div>
      </section>
    );
  }

  recursionClicked = ()=> {
    const thisSlide = document.querySelector('#discography-slide');

    thisSlide.style.transition = 'opacity .35s linear';
    //thisSlide.style.zIndex = '-1';
    thisSlide.style.opacity = '0';

    setTimeout(()=> {
      thisSlide.style.transition = 'opacity 2s linear';
      thisSlide.style.zIndex = '0';
      thisSlide.style.opacity = '1';
    }, 1000);

    setTimeout(()=> {
      thisSlide.style.transition = 'all 1s ease-out';
    }, 3000);
  }
}

export default Discography;

//
