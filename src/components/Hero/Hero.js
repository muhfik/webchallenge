import { Link } from 'react-router-dom';
import { BsStar } from 'react-icons/bs';

import './Hero.scss';

const Hero = ({ subtitleHeading, subtitleFooter, offer, title, text }) => {
  return (
    <section className="hero py-5">
      <article className="hero__content">
        <h3 className="hero__offer">
          {subtitleHeading}{' '}
          <span className="hero__offer-btn">
            <BsStar className="hero__star" />
            <span>{offer}</span>
            <BsStar className="hero__star" />
          </span>{' '}
          {subtitleFooter}
        </h3>
       
      </article>
    </section>
  );
};

export default Hero;
