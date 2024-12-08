import { Link } from 'react-router-dom';
import littleLogo from '../assets/images/small_logo.png'

function Footer() {
    return (
        <footer className="footer">
            <section className="company-info">
                <img src={littleLogo} alt="Little Lemon Logo" className="footer-logo" />
                <p>123 Lemon Street, Chicago, IL</p>
                <p>Call us: (123) 456-7890</p>
            </section>
            <ul>
                <li><Link to="/">Privacy Policy</Link></li>
                <li><Link to="/">Terms of Service</Link></li>
                <li><Link to="/">Contact Us</Link></li>
            </ul>
        </footer>
    );
}

export default Footer;


