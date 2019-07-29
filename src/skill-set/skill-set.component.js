import React from 'react';
import './skill-set.component.scss';

class SkillSet extends React.Component {
  render() {
    let position = this.props.status.position;

    return (
      <section id="skillset-slide" className={`slides ${position}-slides`} onClick={this.props.onClick}>
        <p>
          I'm good at what I do. And I've got the scores to prove it. <br />
          As these scores show, I'm proficient in the use of the most popular web technologies. <br />
          <small>These tests were graded over 300 on Pluralsight.</small>
        </p>

        <div id="skill-iqs-container">
          <div className="polaroid skill-iq-card">
            <img src="/javascript.iq.png" alt="My JavaScript skill IQ is 240" />
            <p><span>Assessment - May 2019.</span> <br /> <span>80% - 94th percentile.</span></p>
          </div>

          <div className="polaroid skill-iq-card">
            <img src="/html5.iq.png" alt="My HTML5 skill IQ is 247" />
            <p><span>Assessment - May 2019.</span> <br /> <span>80% - 94th percentile.</span></p>
          </div>

          <div className="polaroid skill-iq-card">
            <img src="/CSS.iq.png" alt="My CSS skill IQ is 246" />
            <p><span>Assessment - July 2019.</span> <br /> <span>80% - 94th percentile.</span></p>
          </div>

          <div className="polaroid skill-iq-card">
            <img src="/angular.iq.png" alt="My Angular skill IQ is 218" />
            <p><span>Assessment - July 2019.</span> <br /> <span>80% - 94th percentile.</span></p>
          </div>

          <div className="polaroid skill-iq-card">
            <img src="/typescript.iq.png" alt="My TypeScript skill IQ is 240" />
            <p><span>Assessment - July 2019.</span> <br /> <span>80% - 94th percentile.</span></p>
          </div>
        </div>
      </section>
    );
  }
}

export default SkillSet;