# App.js

```javascript
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { BookingProvider } from "./components/BookingContext";
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';


function submitReservation(formData) {

    const isSuccess = Math.random() > 0.2;
    return isSuccess;
}

function App() {
    return (
        <BookingProvider>
            <Router>
                <Nav />
                {/* Pass submitReservation to Main */}
                <Main submitReservation={submitReservation} />
                <Footer />
            </Router>
        </BookingProvider>
    );
}

export default App;
```

# App.test.js

```javascript
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Little Lemon header', () => {
    render(<App />);

    // Targeting the h1 element containing "Little Lemon"
    const headerElement = screen.getByRole('heading', { name: /Little Lemon/i, level: 1 });
    expect(headerElement).toBeInTheDocument();
});
```

# App.css

```css
/* General Styles */
body {
  margin: 0;
  padding: 0;
  min-width: 320px;
  overflow-x: hidden;
  font-family: 'Karla', sans-serif;
  color: #495e57;
  background-color: #ffffff;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Markazi Text', serif;
  margin: 0;
  color: #495e57;
}

h1 {
  font-size: 64px;
  font-weight: 500;
  color: #f4ce14;
  margin-bottom: 16px;
}

h2 {
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 12px;
}

h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}

p {
  font-size: 16px;
  line-height: 1.5;
  color: #495e57;
  margin-bottom: 16px;
}

span {
  font-size: 16px;
  font-weight: bold;
  color: #e63946;
}

/* Booking Page */
.booking-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: #f9f9f9;
}

.booking-header {
  background-color: #ffffff;
  color: #000000;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
  padding: 40px;
  text-align: left;
}

.booking-header h1 {
  font-size: 48px;
  font-family: 'Markazi Text', serif;
  font-weight: bold;
  color: #f4ce14;
  margin-bottom: 25px;
  text-align: center;
}

.booking-form {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.booking-form input,
.booking-form select {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #000000;
  border-radius: 5px;
}

.booking-form button {
  background-color: #495e57;
  color: #edefee;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}

.booking-form button:hover {
  background-color: #f4ce14;
  color: #000;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 4px;
}

.confirmation-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 50px auto;
  text-align: center;
  font-family: 'Karla', sans-serif;
  max-width: 400px;
}

.confirmation-page h1 {
  font-family: 'Markazi Text', serif;
  font-size: 36px;
  color: #495e57;
  margin-bottom: 20px;
}

.confirmation-page p {
  font-size: 18px;
  color: #495e57;
  line-height: 1.6;
  margin: 12px 0;
}

.confirmation-page ul {
  background-color: #ffffff;
  box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  list-style: none;
  padding: 0;
  margin: 20px 0;
  text-align: left;
  width: 100%;
  max-width: 400px;
}

.confirmation-page ul li {
  padding: 10px 20px;
  margin-bottom: 10px;
  font-size: 16px;
  color: #333333;
}

.confirmation-page ul li b {
  color: #495e57;
}

.confirmation-page strong {
  color: #e63946;
  font-weight: bold;
}

.confirmation-page b {
  color: #f4ce14;
}


/* Navigation Bar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #ffffff;
  border-bottom: 1px solid #dddddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav ul {
  display: flex;
  padding-right: 5%;
  padding-left: 10px;
}

nav ul li {
  list-style: none;
}

nav ul li a {
  text-decoration: none;
  font-weight: normal;
  font-family: 'Karla', sans-serif;
  color: #6f6f6f;
  padding: 10px;
  white-space: nowrap;
  border-radius: 5px;
  transition: all 0.3s ease;
}

nav ul li a:hover {
  color: #000000;
}

.nav-logo {
  width: 200px;
  padding-left: 5%;
}

nav .menu {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 35px;
  height: 25px;
  gap: 5px;
}

nav .menu span {
  height: 3px;
  width: 100%;
  background-color: #6f6f6f;
  border-radius: 6px;
}

.nav-links.active {
  display: flex;
}

/* Media Query for Hamburger Menu */
@media (max-width: 900px) {
  nav .menu {
    display: flex;
    padding-right: 10%;
  }

  nav ul {
    display: none;
    flex-direction: column;
    width: 100%;
  }

  nav ul li {
    text-align: center;
    width: 100%;
  }

  nav ul li a {
    margin: 0.5rem 0;
  }

  .nav-links.active {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
}

/* Header Section */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 10%;
  background-color: #495e57;
  color: #edefee;
}

.header-logo {
  width: 150px;
}

.header h1 {
  color: #f4ce14;
}

.header h2 {
  font-size: 40px;
  color: #ffffff;
}

.header p {
  font-size: 18px;
  margin-bottom: 20px;
}

.reserve-btn {
  background-color: #f4ce14;
  color: #000000;
  text-decoration: none;
  font-family: 'Karla', sans-serif;
  font-weight: bold;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.reserve-btn:hover {
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
}

.header-image img {
  width: 400px;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

/* Call-To-Action Section */
.call-to-action {
  display: block;
  justify-content: space-between;
  align-items: center;
  height: 270px;
  padding: 30px 20%;
  background-color: #495e57;
  color: #edefee;
  position: relative;
  overflow: visible;
  height: auto;
}

.call-to-action .cta-text {
  max-width: 50%;
  text-align: left;
}

.call-to-action h1 {
  font-family: 'Markazi Text', serif;
  white-space: nowrap;
  font-size: 64px;
  font-weight: 500;
  color: #f4ce14;
  margin-bottom: 16px;
}

.call-to-action h2 {
  font-family: 'Markazi Text', serif;
  font-size: 40px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 12px;
}

.call-to-action p {
  font-family: 'Karla', sans-serif;
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 24px;
  color: #edefee;
}

.call-to-action .reserve-btn {
  display: inline-block;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  background-color: #f4ce14;
  text-decoration: none;
  color: #000000;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.call-to-action .reserve-btn:hover {
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
}

.call-to-action .cta-image {
  max-width: 350px;
  position: absolute;
  right: 20%;
  top: 55%;
  transform: translateY(-50%);
}

.call-to-action .cta-image img {
  width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 1160px) {
  .call-to-action {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: auto;
    height: auto;
    padding: 30px;
  }

  .call-to-action .cta-text {
    display: inline-block;
    max-width: 80%;
    text-align: center;
  }


  .call-to-action p {
    width: 100%;
    max-width: 400px;
  }

  .call-to-action .reserve-btn {
    margin-top: 20px; /* Space between text and button */
    align-self: center; /* Center button in flex layout */
  }

  .cta-image {
    display: none; /* Hide image on smaller screens */
  }
}


.customers-say-banner {
  padding: 40px 20%;
}

/* Specials Section */
.specials {
  justify-content: space-between;
  text-align: center;
  padding: 40px 10%;
  margin-bottom: 40px;
}

.specials-banner {
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 20px 12%;
}

.specials h2 {
  font-size: 40px;
  font-family: 'Markazi Text', serif;
  white-space: nowrap;
  color: #495e57;
  margin-bottom: 24px;
}

.specials-banner .reserve-btn {
  display: inline-block;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  max-height: 20px;
  min-width: 120px;
  background-color: #f4ce14;
  text-decoration: none;
  color: #000000;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.specials-banner .reserve-btn:hover {
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
}

.specials-grid {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.special-item {
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  width: 300px;
}

.special-item img {
  width: 100%;
  border-radius: 16px;
  margin-bottom: 12px;
}

.special-item h3 {
  font-size: 18px;
  font-family: 'Markazi Text', serif;
  font-weight: bold;
  color: #000000;
  margin-bottom: 8px;
}

.special-item p {
  font-size: 18px;
  line-height: 1.50;
  color: #000000;
}

.special-item-footer {
  border-top: 1px solid #e9e9e9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.order-link {
  text-decoration: none;
  font-weight: bold;
  color: #495e57;
  transition: all 0.3s ease;
}

.order-link:hover {
  color: #6f6f6f;
  transform: translateY(-2px);
}

.menu-item-price {
  font-size: 24px;
  font-weight: bold;
  color: #e63946;
}

/* Chicago Section */
.chicago {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 20%;
  background-color: #edefee;
  color: #495e57;
}

.chicago-text {
  max-width: 50%;
}

.chicago-text h2 {
  font-size: 40px;
  font-family: 'Markazi Text', serif;
  color: #000000;
  margin-bottom: 24px;
}

.chicago-text p {
  font-family: 'Karla', sans-serif;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #495e57;
}

.chicago-images {
  display: flex;
  gap: 20px;
  flex-direction: column;
  max-width: 45%;
}

.chicago-images img {
  width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Responsive Design for Chicago Section */
@media screen and (max-width: 768px) {
  .chicago {
    flex-direction: column;
    padding: 40px 10%;
    text-align: center;
  }

  .chicago-text {
    max-width: 100%;
    margin-bottom: 20px;
  }

  .chicago-images {
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .chicago-images img {
    max-width: 35%;
  }

  .specials-banner, .reserve-btn {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0px;
    margin-bottom: 20px;
  }
  .confirmation-page .reserve-btn {
    padding: 10px 20px;
  }
}


/* Testimonials Section */
.testimonials-grid {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 40px 10%;
}

.testimonial {
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  width: 300px;
}

.testimonial img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 16px;
}

.testimonial h3 {
  font-size: 18px;
  font-weight: bold;
}

.testimonial p {
  font-size: 16px;
  line-height: 1.5;
  color: #495e57;
}

/* Footer Section */
.footer {
  background-color: #495e57;
  color: #edefee;
  padding: 40px 20%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer p {
  color: #edefee;
}

.footer h3 {
  font-size: 18px;
  font-family: 'Markazi Text', serif;
  font-weight: bold;
  margin-bottom: 16px;
}

.footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer ul li {
  margin-bottom: 8px;
}

.footer ul li a {
  text-decoration: none;
  font-family: 'Karla', sans-serif;
  color: #edefee;
  font-size: 16px;
  transition: all 0.3s ease;
}

.footer ul li a:hover {
  color: #dddddd;
}

.footer-logo {
  max-width: 40px;
  padding: 10px;
  background-color: #edefee;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .navbar {
    flex-direction: row;
    justify-content: space-between;
  }

  .call-to-action, .menu-container {
    padding: 40px 5%;
  }

  .specials-grid, .testimonials-grid {
    flex-direction: column;
    align-items: center;
  }

  .footer {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

```

# BookingContext.js

```jsx
import React, { createContext, useState } from "react";

export const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [reservedSlots, setReservedSlots] = useState({});

  return (
    <BookingContext.Provider value={{ reservedSlots, setReservedSlots }}>
      {children}
    </BookingContext.Provider>
  );
}
```

# BookingForm.js

```Javascript
import React, { useState, useEffect } from "react";

function BookingForm({ submitForm }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  const [reservedSlots, setReservedSlots] = useState({});

  useEffect(() => {
    if (formData.date) {
      const reservedForDate = reservedSlots[formData.date] || [];
      setAvailableTimes(
        ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"].filter(
          (time) => !reservedForDate.includes(time)
        )
      );
    }
  }, [formData.date, reservedSlots]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentDateTime = new Date();
    const selectedDateTime = new Date(`${formData.date}T${formData.time}`);

    if (selectedDateTime < currentDateTime) {
      alert("You cannot select a past date or time.");
      return;
    }

    setReservedSlots((prevSlots) => ({
      ...prevSlots,
      [formData.date]: [...(prevSlots[formData.date] || []), formData.time],
    }));
    submitForm(formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        min={new Date().toISOString().split("T")[0]}
        required
      />

      <label htmlFor="time">Time:</label>
      <select
        id="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      >
        <option value="" disabled>
          --Select Time--
        </option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      {!formData.time && (
        <span className="error-message">Please select a time</span>
      )}

      <label htmlFor="guests">Guests:</label>
      <input
        type="number"
        id="guests"
        name="guests"
        min="1"
        max="10"
        value={formData.guests}
        onChange={handleChange}
        required
      />

      <label htmlFor="occasion">Occasion:</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
      >
        <option value="" disabled>
          --Select Occasion--
        </option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}

export default BookingForm;

```

# BookingForm.test.js

```javascript
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm Component", () => {
  let mockSubmitForm;

  beforeEach(() => {
    mockSubmitForm = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should alert for past date selection", () => {
    global.alert = jest.fn();

    render(<BookingForm submitForm={mockSubmitForm} />);

    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: "2023-01-01" },
    });
    fireEvent.change(screen.getByLabelText(/time/i), {
      target: { value: "18:00" },
    });
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(global.alert).toHaveBeenCalledWith(
      "You cannot select a past date or time."
    );
  });

  test("should successfully submit with valid fields", () => {
    render(<BookingForm submitForm={mockSubmitForm} />);

    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: new Date().toISOString().split("T")[0] },
    });
    fireEvent.change(screen.getByLabelText(/time/i), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText(/guests/i), {
      target: { value: "2" },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Birthday" },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: new Date().toISOString().split("T")[0],
      time: "18:00",
      guests: "2",
      occasion: "Birthday",
    });
    expect(mockSubmitForm).toHaveBeenCalledTimes(1);
  });
});
```

# BookingPage.js

```javascript
import React from "react";
import BookingForm from "./BookingForm";
import { useNavigate } from "react-router-dom";

function BookingPage() {
    const navigate = useNavigate();

    const handleSubmitForm = (formData) => {
        console.log("Form submitted:", formData);

        // Navigate to confirmation page with state
        navigate("/confirmed", { state: { formData } });
    };

    return (
        <section className="booking-page">
            <section className="booking-header">
                <h1>Book Your Table</h1>
                <BookingForm submitForm={handleSubmitForm} />
            </section>
        </section>
    );
}

export default BookingPage;
```

# CallToAction.js

```javascript
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
```

# Chicago.js

```javascript
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
```

# ConfirmedBooking.js

```jsx
import { Link, useLocation } from "react-router-dom";

function ConfirmedBooking() {
    const location = useLocation();
    const { formData } = location.state || {};

    if (!formData) {
        return <p>No booking information available.</p>;
    }

    const confirmationNumber = Math.floor(100000 + Math.random() * 900000);

    return (
        <section className="confirmation-page">
            <h1>Booking Confirmed!</h1>
            <p>Thank you, <b>John Doe</b>, for your reservation.</p>
            <p>Your booking details:</p>
            <ul>
                <li><b>Date:</b> {formData.date}</li>
                <li><b>Time:</b> {formData.time}</li>
                <li><b>Guests:</b> {formData.guests}</li>
                <li><b>Occasion:</b> {formData.occasion}</li>
            </ul>
            <p>Your confirmation number is: <strong>{confirmationNumber}</strong></p>
            <Link to="/" className="reserve-btn">Back To Home</Link>
        </section>
    );
}

export default ConfirmedBooking;
```

# CustomersSay.js

```javascript
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
```

# Footer.js

```javascript
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
                <li><Link href="/">Privacy Policy</Link></li>
                <li><Link href="/">Terms of Service</Link></li>
                <li><Link href="/">Contact Us</Link></li>
            </ul>
        </footer>
    );
}

export default Footer;
```



# Homepage.js

```javascript
import React from 'react';
import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';


function Homepage() {
    return (
        <section className="homepage">
            <CallToAction />
            <Specials />
            <CustomersSay />
            <Chicago />
        </section>
    );
}

export default Homepage;


```

# InitializeTimes.js

```javascript
import { fetchAPI } from '../utils/api';

/**
 * Initializes the available booking times by fetching data for today's date.
 * @returns {Array}
 */
export const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
};
```

# initializeTimes.test.js

```javascript
import { act } from '@testing-library/react';
import { initializeTimes } from './InitializeTimes';
import { fetchAPI } from '../utils/api';

jest.mock('../utils/api', () => ({
    fetchAPI: jest.fn(),
}));

describe('initializeTimes', () => {
    it('should call fetchAPI with today\'s date and return available times', () => {
        const today = new Date();
        const mockTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
        fetchAPI.mockReturnValue(mockTimes);

        const result = initializeTimes();

        expect(fetchAPI).toHaveBeenCalledWith(today);
        expect(result).toEqual(mockTimes);
    });

    it('should return an empty array if fetchAPI fails', () => {
        fetchAPI.mockReturnValue([]);
        const result = initializeTimes();
        expect(result).toEqual([]);
    });
});
```

# index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Little Lemon is your go-to family-owned Mediterranean restaurant for traditional recipes served with a modern twist.">
    <meta property="og:title" content="Little Lemon - Mediterranean Restaurant">
    <meta property="og:description" content="Enjoy authentic Mediterranean cuisine with a modern twist at Little Lemon, a family-owned gem.">
    <meta property="og:image" content="assets/banner.jpg">
    <title>Little Lemon</title>
</head>
<body>
    <div id="root"></div>
    <script src="https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"></script>
    <script src="index.js" type="module"></script>
</body>
</html>
```

# Main.js

```javascript
import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "./Homepage";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import Chicago from "./Chicago";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";

function Main({ submitReservation }) {
    const navigate = useNavigate();

    const handleFormSubmit = (formData) => {
        const isSuccess = submitReservation(formData);
        if (isSuccess) {
            navigate("/confirmed");
        } else {
            alert("Failed to confirm booking. Please try again.");
        }
    };

    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/specials" element={<Specials />} />
                <Route path="/customers-say" element={<CustomersSay />} />
                <Route path="/chicago" element={<Chicago />} />
                <Route
                    path="/booking"
                    element={
                        <BookingPage submitReservation={handleFormSubmit} />
                    }
                />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
            </Routes>
        </main>
    );
}

export default Main;
```



# Nav.js

```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

function Nav() {
    return (
        <nav className="navbar">
            <img src={logo} alt="Little Lemon Logo" className="nav-logo" />
            <div className='menu'>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Chicago">About</Link></li>
                <li><Link to="/">Services</Link></li>
                <li><Link to="/specials">Menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><Link to="/">Order Online</Link></li>
                <li><Link to="/">Hello, John Doe</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
```

# Specials.js

```javascript
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
```

# updateTimes.js

```javascript
import { fetchAPI } from '../utils/api';

/**
 * Updates the available times by fetching from the API based on the selected date.
 * @param {Date} selectedDate - The date selected by the user.
 * @param {Function} dispatch - The dispatch function to update the available times in the state.
 */
export function updateTimes(selectedDate, dispatch) {
    try {
        const availableTimes = fetchAPI(selectedDate);

        dispatch({ type: 'UPDATE_TIMES', payload: availableTimes });
    } catch (error) {
        console.error('Failed to fetch available times:', error);
        dispatch({ type: 'UPDATE_TIMES', payload: [] });
    }
}

export default updateTimes;
```

# updateTimes.test.js

```javascript
import { act } from '@testing-library/react';
import { updateTimes } from './updateTimes';
import { fetchAPI } from '../utils/api';

// Mock fetchAPI for testing purposes
jest.mock('../utils/api', () => ({
    fetchAPI: jest.fn(),
}));

describe('updateTimes', () => {
    it('should call fetchAPI with the given date and update available times', () => {
        const selectedDate = new Date('2024-12-01');
        const mockDispatch = jest.fn();
        const mockTimes = ['17:00', '18:00', '19:00'];
        fetchAPI.mockReturnValue(mockTimes);

        updateTimes(selectedDate, mockDispatch);

        expect(fetchAPI).toHaveBeenCalledWith(selectedDate);
        expect(mockDispatch).toHaveBeenCalledWith({ type: 'UPDATE_TIMES', payload: mockTimes });
    });

    it('should dispatch an empty array if fetchAPI fails', () => {
        const selectedDate = new Date('2024-12-01');
        const mockDispatch = jest.fn();
        fetchAPI.mockReturnValue([]);

        updateTimes(selectedDate, mockDispatch);

        expect(mockDispatch).toHaveBeenCalledWith({ type: 'UPDATE_TIMES', payload: [] });
    });
});
```

# index.js

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

```

# Images location and image files in a list.

little-lemon/src/assets/images = [alf.jpg, bruschetta.jpg, chefB.jpg, cta-image.jpg, gamera.jpg, greek-salad.jpg, lemon-dessert.jpg, logo.png, medDish.jpg, small_logo.png, zilla.jpg]