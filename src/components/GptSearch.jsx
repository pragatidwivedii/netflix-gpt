import { useRef, useState } from "react";
import { API_OPTIONS} from "../utils/constants";
import ai from "../utils/gemini";
import { useDispatch, useSelector } from "react-redux";
import { addMovieSuggestion } from "../utils/GptSlice";


const GptSearch = () => {
    const searchText = useRef(null);
    const dispatch = useDispatch();
    const userName = useSelector((store) => store.user.displayName);
    const [loading, setLoading] = useState(false);
    const movieInfoTMDB = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1" , API_OPTIONS);

        const json = await data.json();
        return json.results[0];
    }

    const handleSearch = async () => {
        if (loading) return; 
        if (!searchText.current.value) return;

        setLoading(true);
        try{
        const result = await ai.interactions.create({
            model: "gemini-3.6-flash",
            input: "Act as a movie recommendation system and suggest some movies for the query:" + searchText.current.value + " Only give me names of movies, comma separated, like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Lagaan",
        } , {
            maxRetries: 0,
        });

        const movieList = await result.output_text.split(", ");

        const data = movieList.map((movie) => {
            return movieInfoTMDB(movie);
        });

        const movieSuggestion = await Promise.all(data);

        dispatch(addMovieSuggestion( movieSuggestion));
        }
        finally{
            setLoading(false);
        }
    }

    return (
        <div className="flex justify-center">


            <div className="absolute z-20 p-5 mt-40 md:mt-30  flex flex-col   items-center ">

                <h1 className="text-4xl font-bold text-white text-center">Hey {userName}, what's in your mind?</h1>

                <form className="absolute z-20 p-5 mt-5 flex flex-col  items-center" onSubmit={(e) => e.preventDefault()}>

                    <textarea 
                        placeholder="What would you like to watch today?" 
                        className="w-90 md:w-120 bg-white p-2 mt-17 md:m-5 text-2xl text-black  border-2 border-black resize-none"
                        ref={searchText} 
                        rows={2} 
                    />

                    <button className=" bg-red-700  p-1 ml-5 mt-5 md:mt-0 text-2xl text-white font-bold rounded-2xl border w-40" onClick={handleSearch}>Search</button>

                </form>

            </div>
        </div>
    )
}

export default GptSearch;