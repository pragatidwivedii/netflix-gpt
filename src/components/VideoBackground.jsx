/* eslint-disable react-hooks/set-state-in-effect */
import { useState ,useEffect} from "react";
import { API_OPTIONS } from "../utils/constants";


export const VideoBackground = ({movieID}) => {

    const [data , setdata] = useState(null); // instead of using state variable we can also push this to redux store which is better option

    const getVideo = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieID + "/videos" , API_OPTIONS);

        const json = await data.json();
        const filteredData = json.results.filter((video) => video.type === "Trailer")
        const trailer = (filteredData.length == 0) ? json.results[0] : filteredData[0];
        setdata(trailer);
    }

    useEffect(() => {
        getVideo();
    },[])

    return(
        <div className="">{data && <iframe
            className="inset-0  aspect-video overflow-hidden " 
            src={`https://www.youtube.com/embed/${data.key}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&loop=1&playlist=${data.key}&playsinline=1`}
            title="trailer"
            allow="autoplay; encrypted-media"
        />}</div>

    )
}