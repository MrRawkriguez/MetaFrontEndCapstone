import React from 'react';
import zilla from '../assets/images/zilla.jpg'
import gamera from '../assets/images/gamera.jpg'
import alf from '../assets/images/alf.jpg'

function CustomersSay() {
    const testimonials = [
        { id: 1, name: "Godzilla", rating: 5, image: zilla, text: "Amazing food!" },
        { id: 2, name: "Gamera", rating: 4, image: gamera, text: "Loved the ambiance." },
        { id: 3, name: "Alf", rating: 5, image: alf, text: "I usually eat cats!" },
    ];

    return (
        <article className="testimonials">
            <header className="customers-say-banner">
                <h2>Customers Say</h2>
            </header>
            <section className="testimonials-grid">
                {testimonials.map(item => (
                    <div key={item.id} className="testimonial">
                        <img src={item.image} alt={item.name} />
                        <p>"{item.text}"</p>
                        <p>Rating: {item.rating}⭐</p>
                        <p>- {item.name}</p>
                    </div>
                ))}
            </section>
        </article>
    );
}

export default CustomersSay;
