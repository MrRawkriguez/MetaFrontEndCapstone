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

