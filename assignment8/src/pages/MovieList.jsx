import MovieCard from "../components/MovieCard";

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

function MovieList() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{
        textAlign: "center",
        fontSize: "2rem",
        fontStyle: "italic",
        fontWeight: "bold",
        textDecoration: "underline",
        marginBottom: "2rem"
      }}>
        POPULAR MARVEL MOVIES
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "2rem"
      }}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
