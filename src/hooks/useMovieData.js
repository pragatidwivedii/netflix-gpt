import { useDispatch } from "react-redux";
import { addNowPlayingMovies,addPopularMovies,addTopRatedMovies,addUpcomingMovies } from "../utils/movieSlice";
import {API_URL, API_OPTIONS ,API_URL_POPULAR , API_URL_TOP_RATED , API_URL_TOP_UPCONMING} from "../utils/constants";
import { useEffect } from "react";


export const useMovieData = () => {
        const dispatch = useDispatch();
        const getMovieData = async () => {
        const data_nowPlaying = await fetch(API_URL, API_OPTIONS);
        const data_Popular = await fetch(API_URL_POPULAR , API_OPTIONS);
        const data_TopRated = await fetch(API_URL_TOP_RATED , API_OPTIONS);
        const data_Upcoming = await fetch(API_URL_TOP_UPCONMING , API_OPTIONS);

        const json_nowPlaying = await data_nowPlaying.json();
        const json_Popular = await data_Popular.json();
        const json_TopRated = await data_TopRated.json();
        const json_Upcoming = await data_Upcoming.json();

        // console.log(json_nowPlaying);
    
        await dispatch(addNowPlayingMovies(json_nowPlaying.results));
        await dispatch(addPopularMovies(json_Popular.results));
        await dispatch(addTopRatedMovies(json_TopRated.results));
        await dispatch(addUpcomingMovies(json_Upcoming.results));
    }

    useEffect(() => {getMovieData()}, []);
}