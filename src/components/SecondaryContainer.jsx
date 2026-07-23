import {useSelector} from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    
    <div className="p-5 relative -mt-73 z-10">
      <h1 className="font-bold text-4xl text-white ml-5 mb-2">NOW PLAYING</h1>
      <MovieList title={movies.nowPlayingMovies}/>
      <h1 className="font-bold text-4xl text-white ml-5 my-2 mt-5">TOP RATED</h1>
      <MovieList title={movies.topRatedMovies}/>
      <h1 className="font-bold text-4xl text-white ml-5 mb-2 mt-5">POPULAR</h1>
      <MovieList title={movies.popularMovies}/>
      <h1 className="font-bold text-4xl text-white ml-5 mb-2 mt-5">UPCOMING</h1>
      <MovieList title={movies.upcomingMovies}/>
    </div>
  )
}

export default SecondaryContainer
