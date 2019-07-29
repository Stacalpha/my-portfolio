import React from 'react';
import './App.scss';

import Landing from './landing/landing.component.js';
import SkillSet from './skill-set/skill-set.component.js';
import Discography from './discography/discography.component.js';

class App extends React.Component {

  constructor(props) {
    super(props); 
    
    this.state = {
      slides: [
        {
          position: "current"
        },
        {
          position: "next"
        },
        {
          position: "next"
        }
      ],
      currentSlide: 0
    };
  }

  render() {
    let currSlide = this.state.currentSlide;
    return (
      <div id="app-container">
        <Landing status={this.state.slides[0]} />
        {/*
        <SkillSet status={this.state.slides[1]} />
        */}
        <Discography status={this.state.slides[2]} />
        <button id="next-slide-btn" 
                className={`${currSlide === 2 ? 'to-top' : ''}`}
                onClick={this.nextSlide}>
          <img alt="Click to go to next slide" src="/icons/arrow-down.png" />
        </button>
      </div>
    );
  }

  nextSlide = ()=> {
    let slides = this.state.slides,
        currentSlide = this.state.currentSlide;

    if (currentSlide < 2) {
      let targetSlide =  currentSlide + /*1*/ 2;

      slides[currentSlide].position = 'previous';
      slides[targetSlide].position = 'current';
      currentSlide = targetSlide;

      this.setState({
        slides: slides,
        currentSlide: currentSlide
      });
    }
    else this.jumpToSlide(0);
  }

  previousSlide = ()=> {
    let currentSlide = this.state.currentSlide;
    
    if (currentSlide === 0)
      return console.log("Topmost slide reached. There's no previous slide to go to.");

    let slides = this.state.slides;
    let targetSlide =  currentSlide - 1;

    slides[currentSlide].position = 'next';
    slides[targetSlide].position = 'current';
    currentSlide = targetSlide;

    this.setState({
      slides: slides,
      currentSlide: currentSlide
    });
  }

  jumpToSlide = (targetSlide)=> {
    const switchSlide = ()=> { //Workaround for setInterval's initial delay. Call this immediately after the setInterval call.
      let currentSlide = this.state.currentSlide;
      if (targetSlide === currentSlide)
        return clearInterval(slideSwitchInterval);

      if (targetSlide < currentSlide)
        this.previousSlide();
      else if (targetSlide > currentSlide)
        this.nextSlide();
    }

    const slideSwitchInterval = setInterval(switchSlide, 900);
    switchSlide();
  }
}

export default App;
