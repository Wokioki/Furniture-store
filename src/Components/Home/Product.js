import React from 'react';
import pot from '../../images/Home/pot.png';
import lamp from '../../images/Home/lamp.png';
import chair from '../../images/Home/chaire.png';

export default function Products() {
  return (
    <section className="products">
      <h2 className="products__title">Products of the week</h2>
      <div className="products__list">
        <div className="product">
          <img src={pot} alt="Pot" />
          <h3>Pot</h3>
          <p>$223.00</p>
        </div>
        <div className="product">
          <img src={lamp} alt="Lamp" />
          <h3>Lamp</h3>
          <p>$220.00</p>
        </div>
        <div className="product">
          <img src={chair} alt="Chaire" />
          <h3>Chaire</h3>
          <p>$240.00</p>
        </div>
      </div>
    </section>
  );
}
