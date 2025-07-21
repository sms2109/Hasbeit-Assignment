// MovieCard.jsx
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '1rem',
      backgroundColor: '#fefefe',
      boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
      textAlign: 'center'
    }}>
      <img src={movie.image} alt={movie.title} width="160" height="240" style={{ borderRadius: '6px' }} />
      <h3 style={{ marginTop: '1rem' }}>{movie.title}</h3>
      <p style={{ fontSize: '0.9rem', color: '#555' }}>{movie.info}</p>
      <Link to={`/movie/${movie.id}`} style={{
        display: 'inline-block',
        marginTop: '0.5rem',
        padding: '0.4rem 1rem',
        backgroundColor: '#007bff',
        color: '#fff',
        borderRadius: '5px',
        textDecoration: 'none'
      }}>
        View Details
      </Link>
    </div>
  );
}

export default MovieCard;
