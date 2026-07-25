
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({image}) => {
  return (
    <div className='mr-4 my-4 md:m-4 w-40 md:w-50 shrink-0'>
      <img src={IMG_CDN+image}/>
    </div>
  )
}

export default MovieCard
