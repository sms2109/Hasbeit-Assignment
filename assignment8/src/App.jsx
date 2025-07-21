// App.jsx
import { Routes, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import BookSeat from './pages/BookSeat';
import BookingConfirmation from './pages/BookingConfirmation';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/book/:id" element={<BookSeat />} />
      <Route path="/confirmation" element={<BookingConfirmation />} />
    </Routes>
  );
}

export default App;
