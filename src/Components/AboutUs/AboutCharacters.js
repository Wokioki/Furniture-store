import React from 'react';

export default function AboutCharacters() {
    return (
      <section className="about-characters">
        <div className="about-characters__text">
          <h2>Functionality<br />meets perfection</h2>
          <p>
            Combining premium materials, smart design, and timeless style to bring your furniture to life.
          </p>
        </div>
  
        <div className="about-characters__skills">
          <div className="skill">
            <div className="skill__label">
              <span>Creativity</span>
              <span>68%</span>
            </div>
            <div className="skill__bar">
              <div className="skill__progress" style={{ width: '68%' }}></div>
            </div>
          </div>
  
          <div className="skill">
            <div className="skill__label">
              <span>Advertising</span>
              <span>68%</span>
            </div>
            <div className="skill__bar">
              <div className="skill__progress" style={{ width: '68%' }}></div>
            </div>
          </div>
  
          <div className="skill">
            <div className="skill__label">
              <span>Design</span>
              <span>68%</span>
            </div>
            <div className="skill__bar">
              <div className="skill__progress" style={{ width: '68%' }}></div>
            </div>
          </div>
        </div>
      </section>
    );
  }