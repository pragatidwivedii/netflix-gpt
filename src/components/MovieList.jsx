
import MovieCard from './MovieCard';

const MovieList = ({title}) => {
    console.log(title);
  return (
    <div className="flex overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track">
       {title && title.map((movie) => {
          return <MovieCard key={movie.id} image={movie.poster_path}/>
          
       })}
    </div>
  )
}

export default MovieList
