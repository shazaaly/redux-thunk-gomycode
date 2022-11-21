import React, { useEffect } from 'react'
import '../MovieDetail/movieDetail.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { asyncFetchMovieDetails } from '../../Features/Movies/MoviesSlice'
import { getSelected } from '../../Features/Movies/MoviesSlice'
import { ImagePathLink } from '../../common/apis/imagesPath'

export const MovieDetail = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(asyncFetchMovieDetails(id))
  }, [dispatch, id]);

  let details = useSelector(getSelected)
  // console.log(details.payload.title); => returns title correctly
  console.log(details.payload)



  return (
    <>
      {
        /*check payload return first */
        details.payload ?
          (



            <div className='moviedetailMain'>


              <div className='detailsLeft'>
                <div className='title'>
                  <h2> {details.payload.title}</h2>


                </div>
                <div className='metaData'>
                  <span className='meta span1'> {details.payload.release_date}</span>
                  <span className='meta span2'>Rating : {details.payload.vote_average}</span>
                  <span className='meta span3'>Run time  : {details.payload.runtime} min.</span>
                  {
                    details.payload.genres.map((item) => {
                      {/* {console.log(item.name)} */ }
                      return (<span >{item.name}</span>)
                    })
                  }

                </div>

                <div className='overview'>
                <p> {details.payload.overview}</p>

                  
                </div>

                <div className='tableData'>


                </div>
              </div>
              <div className='imageRight'>
                <img src={`${ImagePathLink}/${details.payload.poster_path}`} />
              </div>

            </div>
          ) : `error`
      }


    </>
  )
}
