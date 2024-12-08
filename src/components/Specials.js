import greekSalad from '../assets/images/greek-salad.jpg';
import bruschetta from '../assets/images/bruschetta.jpg';
import lemonDessert from '../assets/images/lemon-dessert.jpg';
import { Link } from 'react-router-dom';

function Specials() {
    const specials = [
        {
            title: 'Greek Salad',
            price: '$12.99',
            description: 'The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
            image: greekSalad,
        },
        {
            title: 'Bruschetta',
            price: '$5.89',
            description: 'Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
            image: bruschetta,
        },
        {
            title: 'Lemon Dessert',
            price: '$5.00',
            description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be Imagined.",
            image: lemonDessert,
        },
    ];

    return (
        <section className="specials">
            <div className="specials-banner">
                <h2>This Weeks Specials!</h2>
                <Link to='/Specials' className="reserve-btn">Online Menu</Link>
            </div>
            <div className="specials-grid">
                {specials.map((special, index) => (
                    <div className="special-item" key={index}>
                        <img src={special.image} alt={special.title} />
                        <h3>{special.title}</h3>
                        <p>{special.description}</p>
                        <div className="special-item-footer">
                            <p className="menu-item-price">{special.price}</p>
                            <Link to="/" className="order-link">Order a Delivery</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Specials;
