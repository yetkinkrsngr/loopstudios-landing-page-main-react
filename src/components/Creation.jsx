import React from 'react';
import data from '../data-mobile';

const Creations = () => {
  // eslint-disable-next-line
  const [cards, setCards] = React.useState(data);

  return (
    <section className="creations-mobile">
      <h2>Our creations</h2>
      <section>
        {cards.map((card) => {
          const { id, image, title } = card;
          return (
            <article key={id}>
              <div>
                <img src={image} alt="creations card" />
              </div>
              <h3 className="titleHeader">{title}</h3>
            </article>
          );
        })}
      </section>
      <div className="btn-container">
        <button className="btn">See All</button>
      </div>
    </section>
  );
};

export default Creations;
