import Header from "./Header";
import { useMovieData } from "../hooks/useMovieData";
import Maincontainer from "./Maincontainer";
import SecondaryContainer from "./SecondaryContainer";
import {useSelector} from "react-redux";
import GptPage from "./GptPage";


const Browse = () => {
    const selector = useSelector((store) => store.GPT);
    
    useMovieData();


    return (
        <div className="bg-black">
            <Header />
            {
                (selector.ShowGptPage) ? <GptPage/> 
                :<>
                    <Maincontainer />
                    <SecondaryContainer />
                </>
            }
            

        </div>
    )
}

export default Browse;