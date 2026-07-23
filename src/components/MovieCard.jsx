
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({image}) => {
  return (
    <div className='m-4 w-55 shrink-0'>
      <img src={IMG_CDN+image}/>
    </div>
  )
}

export default MovieCard
