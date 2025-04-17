import React from 'react';

export default function AboutVideo() {
  return (
    <section className="about-video">
      <div className="about-video__container">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/KNC8PlWPkas?si=rL28hkYjqSj_r62v"
          title="About us video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}