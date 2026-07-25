import GptResults from "./GptResults"
import GptSearch from "./GptSearch"
import { BG_IMG } from "../utils/constants"

const GptPage = () => {

    return(
        <div className="relative">
            <img src={BG_IMG} className="fixed z-0 h-full w-full object-cover"/>
            <div className="bg-black/50 h-full w-full fixed z-8"></div>
            <GptSearch />
            <GptResults />
        </div>
    )
}

export default GptPage;