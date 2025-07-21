// MovieDetails.jsx
import { useParams, useNavigate } from 'react-router-dom';

const movies = [
  {
    id: 1,
    title: "Ant-Man",
    image: "https://upload.wikimedia.org/wikipedia/en/1/12/Ant-Man_%28film%29_poster.jpg",
    info: "CBFC: U/A | 2023 | Action/Sci-fi"
  },
  {
    id: 2,
    title: "Avengers: Infinity War",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg",
    info: "CBFC: U/A | 2018 | Action/Sci-fi | 2h 29m"
  },
  {
    id: 3,
    title: "Avengers: Endgame",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRnXEwQlva93WuBdWDK6LlOSf4f96CB5OxToqcdkHiWBnn2p5WOjaOGKo_t6i9F-gQ2tYUp",
    info: "CBFC: U/A | 2019 | Action/Sci-fi | 3h 1m"
  },
  {
    id: 4,
    title: "Spider-Man: Homecoming",
    image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12798844_p_v8_ao.jpg",
    info: "CBFC: U/A | 2017 | Action/Sci-fi | 2h 13m"
  },
  {
    id: 5,
    title: "Black Panther",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MSjVz4AlBMvl3RD0eXqenCdZbowXC-2uGUcgYGSrtuOdsVAGWVYmJ24_wB54zLkMxaVU",
    info: "CBFC: U/A | 2018 | Action/Sci-fi | 2h 14m"
  },
  {
    id: 6,
    title: "Black Panther: Wakanda Forever",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT0RStaL9seNiyiWqqzBJJXx8PhVzdIHhlxdYIbzQBpY7Q44BmZIoyxgJqZQuN6mGHvLyqa-z8301c4QJTMyJXQVadaP42UPxuo6WPKew",
    info: "CBFC: U/A | 2022 | Action/Sci-fi | 2h 41m"
  }
];

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) return <p>Movie not found</p>;

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <img src={movie.image} alt={movie.title} height="350" style={{ borderRadius: '10px' }} />
      <h2 style={{ margin: '1rem 0' }}>{movie.title}</h2>
      <p>{movie.info}</p>
      <button onClick={() => navigate(`/book/${movie.id}`)} style={{
        padding: '0.5rem 1.2rem',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        marginTop: '1rem',
        cursor: 'pointer'
      }}>
        Book Seat
      </button>
    </div>
  );
}

export default MovieDetails;
