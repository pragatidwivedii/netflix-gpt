import Header from "./Header";
import { useMovieData } from "../hooks/useMovieData";
import Maincontainer from "./Maincontainer";
import SecondaryContainer from "./SecondaryContainer";



const Browse = () => {

    useMovieData();


    return (
        <div className="bg-black">
            <Header />
            <Maincontainer />
            <SecondaryContainer />
        </div>
    )
}

export default Browse;