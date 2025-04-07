import React from 'react';
import office from '../../images/Home/office2.jpg';
import kitchen from '../../images/Home/kitchen.jpg';

export default function Articles() {
  return (
    <section className="articles">
      <div className="article">
        <img src={office} alt="Office interior" />
        <p className="article__date">04 Apr. 2025 / by ai</p>
        <h4>Your office should have only natural materials</h4>
        <a href="#">read more</a>
      </div>
      <div className="article">
        <img src={kitchen} alt="Kitchen interior" />
        <p className="article__date">03 Sep. 2025 / by ai</p>
        <h4>Your kitchen should have only natural materials</h4>
        <a href="#">read more</a>
      </div>
    </section>
  );
}