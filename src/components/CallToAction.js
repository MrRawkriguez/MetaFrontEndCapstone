import React from 'react';
import { Link } from 'react-router-dom';
import ctaImage from '../assets/images/cta-image.jpg';

function CallToAction() {
    return (
        <section className="call-to-action">
            <article className="cta-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to="/booking" className="reserve-btn">Reserve a Table</Link>
            </article>
            <section className="cta-image">
                <img src={ctaImage} alt="Delicious Mediterranean Food" />
            </section>
        </section>
    );
}

export default CallToAction;

