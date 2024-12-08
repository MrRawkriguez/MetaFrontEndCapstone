import React from "react";
import BookingForm from "./BookingForm";
import { useNavigate } from "react-router-dom";

function BookingPage() {
    const navigate = useNavigate();

    const handleSubmitForm = (formData) => {
        console.log("Form submitted:", formData);

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

