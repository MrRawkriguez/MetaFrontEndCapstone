import React, { createContext, useState } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [reservedSlots, setReservedSlots] = useState([]);

  return (
    <BookingContext.Provider value={{ reservedSlots, setReservedSlots }}>
      {children}
    </BookingContext.Provider>
  );
};

