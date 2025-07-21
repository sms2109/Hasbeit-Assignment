// BookingConfirmation.jsx
import { useLocation } from 'react-router-dom';

function BookingConfirmation() {
  const { state } = useLocation();

  if (!state) return <p>No booking data found!</p>;

  return (
    <div style={{
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: '#f4f4f4',
      borderRadius: '8px'
    }}>
      <h2 style={{ color: 'green' }}>Seat Booked Successfully!</h2>
      <p><strong>Booking ID:</strong> #{state.bookingId}</p>
      <p><strong>Name:</strong> {state.name}</p>
      <p><strong>Email:</strong> {state.email}</p>
      <p><strong>Mobile:</strong> {state.mobile}</p>
    </div>
  );
}

export default BookingConfirmation;
