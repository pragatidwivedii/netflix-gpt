import { useSelector } from "react-redux";
import { IMG_CDN } from "../utils/constants";

const GptResults = () => {
    const selector = useSelector((store) => store.GPT);
    return (selector.showResult) ? 
        (<div className="absolute z-20 flex flex-wrap justify-center text-white mt-110 md:mt-90 m-5">
            
            {(selector.MovieSuggestion.length === 0) && (<div><h1 className="text-5xl mt-5 md:mx-15 md:font-bold">Loading...</h1>
                                                        <h2 className="text-3xl mt-5 md:mx-15 md:font-bold">It may take some time</h2></div>)}
        
            
            {selector.MovieSuggestion.map((movie) => {
                return (
                    <div className="w-100 flex   p-5" key={movie.id}>
                    <div className='m-4 w-40 shrink-0 shadow-2xl shadow-white/40'>
                        <img src={IMG_CDN+movie.poster_path} />
                    </div>
                    <div className=" flex flex-col justify-center ">
                    <h1 className="text-2xl mb-5 font-bold ">{movie.title}</h1>
                    </div>

                    </div>  
                )
            })}
        </div>
       ) : <div></div>
    
}

export default GptResults;