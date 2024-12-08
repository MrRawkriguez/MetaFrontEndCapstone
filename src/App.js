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





