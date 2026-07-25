import Header from "./Header";
import { useMovieData } from "../hooks/useMovieData";
import Maincontainer from "./Maincontainer";
import SecondaryContainer from "./SecondaryContainer";
import {useSelector} from "react-redux";
import GptPage from "./GptPage";


const Browse = () => {
    const selector = useSelector((store) => store.GPT);
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
    const popularMovies = useSelector((store) => store.movies.popularMovies);
    const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
    
    useMovieData();


    return (nowPlayingMovies && popularMovies && topRatedMovies && upcomingMovies) ?
        (<div className="bg-black">
            <Header />
            {
                (selector.ShowGptPage) ? <GptPage/> 
                :<>
                    <Maincontainer />
                    <SecondaryContainer />
                </>
            }
        </div>
    ) : <div className="bg-black flex justify-center items-center text-4xl text-white w-full h-screen">Loading...</div>
}

export default Browse;