import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { BookingContext } from "./BookingContext";
import BookingForm from "./BookingForm";

beforeAll(() => {
  jest.useFakeTimers("modern");
  jest.setSystemTime(new Date("2023-01-01T12:00:00Z"));
});

afterAll(() => {
  jest.useRealTimers();
});

test("should render BookingForm component", () => {
  render(
    <BookingContext.Provider value={{ reservedSlots: {}, setReservedSlots: jest.fn() }}>
      <BookingForm submitForm={jest.fn()} />
    </BookingContext.Provider>
  );

  // Check if all input fields and the button are present
  expect(screen.getByLabelText(/Date:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Time:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Guests:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Occasion:/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
});

test("should successfully submit with valid fields", () => {
  const mockSubmitForm = jest.fn();
  const mockSetReservedSlots = jest.fn();

  render(
    <BookingContext.Provider
      value={{
        reservedSlots: { "2023-01-02": ["17:00"] },
        setReservedSlots: mockSetReservedSlots,
      }}
    >
      <BookingForm submitForm={mockSubmitForm} />
    </BookingContext.Provider>
  );

  // Fill out the form
  fireEvent.change(screen.getByLabelText(/Date:/i), { target: { value: "2023-01-02" } });
  fireEvent.change(screen.getByLabelText(/Time:/i), { target: { value: "18:00" } });
  fireEvent.change(screen.getByLabelText(/Guests:/i), { target: { value: "4" } });
  fireEvent.change(screen.getByLabelText(/Occasion:/i), { target: { value: "Birthday" } });

  // Submit the form
  fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

  // Check if setReservedSlots and submitForm were called correctly
  expect(mockSetReservedSlots).toHaveBeenCalledWith(expect.any(Function)); // Called with a function
  expect(mockSubmitForm).toHaveBeenCalledWith({
    date: "2023-01-02",
    time: "18:00",
    guests: "4",
    occasion: "Birthday",
  });
});

test("should show an alert when submitting a past date and time", () => {
  const mockSubmitForm = jest.fn();
  const mockSetReservedSlots = jest.fn();
  window.alert = jest.fn(); // Mock the alert function

  render(
    <BookingContext.Provider value={{ reservedSlots: {}, setReservedSlots: mockSetReservedSlots }}>
      <BookingForm submitForm={mockSubmitForm} />
    </BookingContext.Provider>
  );

  // Attempt to submit a past date and time
  fireEvent.change(screen.getByLabelText(/Date:/i), { target: { value: "2022-12-31" } });
  fireEvent.change(screen.getByLabelText(/Time:/i), { target: { value: "17:00" } });
  fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

  // Check if alert was called and submitForm was not called
  expect(window.alert).toHaveBeenCalledWith("You cannot select a past date or time.");
  expect(mockSubmitForm).not.toHaveBeenCalled();
  expect(mockSetReservedSlots).not.toHaveBeenCalled();
});

test("should update available times based on reserved slots", () => {
  render(
    <BookingContext.Provider
      value={{
        reservedSlots: { "2023-01-02": ["18:00", "19:00"] },
        setReservedSlots: jest.fn(),
      }}
    >
      <BookingForm submitForm={jest.fn()} />
    </BookingContext.Provider>
  );

  // Set a date
  fireEvent.change(screen.getByLabelText(/Date:/i), { target: { value: "2023-01-02" } });

  // Check available times
  expect(screen.queryByText("18:00")).not.toBeInTheDocument();
  expect(screen.queryByText("19:00")).not.toBeInTheDocument();
  expect(screen.getByText("17:00")).toBeInTheDocument();
  expect(screen.getByText("20:00")).toBeInTheDocument();
});
