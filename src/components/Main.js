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


