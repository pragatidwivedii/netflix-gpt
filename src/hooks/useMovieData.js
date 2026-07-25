import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies,addPopularMovies,addTopRatedMovies,addUpcomingMovies } from "../utils/movieSlice";
import {API_URL, API_OPTIONS ,API_URL_POPULAR , API_URL_TOP_RATED , API_URL_TOP_UPCONMING} from "../utils/constants";
import { useEffect } from "react";


export const useMovieData = () => {
        const selector = useSelector((store) => (store.movies.nowPlayingMovies))
        const dispatch = useDispatch();
        const getMovieData = async () => {
            if(!selector){
                console.log("API call made");
                const [data_nowPlaying, data_Popular, data_TopRated, data_Upcoming] = await Promise.all([
                    fetch(API_URL, API_OPTIONS),
                    fetch(API_URL_POPULAR, API_OPTIONS),
                    fetch(API_URL_TOP_RATED, API_OPTIONS),
                    fetch(API_URL_TOP_UPCONMING, API_OPTIONS),
                ]);

                const json_nowPlaying = await data_nowPlaying.json();
                const json_Popular = await data_Popular.json();
                const json_TopRated = await data_TopRated.json();
                const json_Upcoming = await data_Upcoming.json();

    
                await dispatch(addNowPlayingMovies(json_nowPlaying.results));
                await dispatch(addPopularMovies(json_Popular.results));
                await dispatch(addTopRatedMovies(json_TopRated.results));
                await dispatch(addUpcomingMovies(json_Upcoming.results));
            }
    }

    useEffect(() => {getMovieData()}, []);
}