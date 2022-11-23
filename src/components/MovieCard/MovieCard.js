import React, { useEffect } from 'react'

import { ImagePathLink } from '../../common/apis/imagesPath'
import '../MovieCard/movieCard.scss'

export const MovieCard = (props) => {
  

  const { data } = props

  console.log(`${ImagePathLink}${data.poster_path}`);
  // console.log(props.data);
  return (
    <div className='card-item'>
    
      <div className='card-inner'>
        <div className='top'>
       { data.poster_path? 
          <img src={`${ImagePathLink}/${data.poster_path}`} alt={data.title} /> : null
          }

        </div>
        <div className='bottom'>
          <div className='info'>
            <h4 id='movie-name'>

              {data.title ? data.title : data.name}</h4>
            <p>{data.release_date ? data.release_date : data.first_air_date}</p>

          </div>

        </div>


      </div>


    </div>
  )
}
