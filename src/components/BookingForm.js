import React, { useState, useEffect, useContext } from "react";
import { BookingContext } from "./BookingContext";

function BookingForm({ submitForm }) {
  const { reservedSlots, setReservedSlots } = useContext(BookingContext);
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
    const selectedDateTime = new Date(`${formData.date}T${formData.time}`);

    if (selectedDateTime < new Date()) {
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



