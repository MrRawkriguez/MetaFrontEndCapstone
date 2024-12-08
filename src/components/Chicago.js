import React from 'react';
import medDish from '../assets/images/medDish.jpg'

function Chicago() {
    return (
        <section className="chicago">
            <article className="chicago-text">
                <h2>About Little Lemon</h2>
                <p>
                    Little Lemon is a family-owned Mediterranean restaurant in the heart of Chicago.
                    We focus on traditional recipes with a modern twist, offering a unique dining experience
                    that blends culture, flavor, and community.
                </p>
                <p>
                    Our chefs use the freshest ingredients to create dishes that will delight your taste buds.
                    From our signature Greek salad to our mouthwatering desserts, we bring Mediterranean flavors
                    to life in every bite.
                </p>
            </article>
            <div className="chicago-images">
                <img src={medDish} alt="Delicious Mediterranean Dishes" />
            </div>
        </section>
    );
}

export default Chicago;
