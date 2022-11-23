import React, { useEffect } from 'react'
import '../MovieDetail/movieDetail.scss'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { asyncFetchMovieDetails } from '../../Features/Movies/MoviesSlice'
import { getSelected } from '../../Features/Movies/MoviesSlice'
import { ImagePathLink } from '../../common/apis/imagesPath'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faStar } from '@fortawesome/free-solid-svg-icons'
import { faFilm } from '@fortawesome/free-solid-svg-icons'



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
                <FontAwesomeIcon icon= {faCalendar}color='#A8DADC' style={ {marginRight:' 0.2rem'}} />

                  <span className='meta span1'>

                    {details.payload.release_date}
                  </span>
                  <span className='meta span2'>
                    <FontAwesomeIcon icon={faStar} color='4d4d4e' style={ {marginRight:' 0.2rem'}} />
                    {details.payload.vote_average}</span>
                  <span className='meta span3'>
                  <FontAwesomeIcon icon={faFilm }  color='4d4d4e' style={ {marginRight:' 0.2rem'}}/>
                   {details.payload.runtime} min
                   </span>

                </div>

                <div className='overview'>
                  <p> {details.payload.overview}</p>

                </div>

                <div className='tableData'>
                  <table className='tableMain'>
                    <thead className='tableHead'>
                      <tr>
                        <th colspan="2">Directors</th>
                      </tr>
                      <tr>
                        <th colspan="2">Link</th>
                      </tr>
                      <tr>
                        <th colspan="2">Generes</th>
                      </tr>
                      <tr>
                        <th colspan="2">Languages</th>
                      </tr>


                    </thead>
                    <tbody className='tableBody'>
                      <tr className='data'>
                        <td>1</td>
                        <td>
                          <a className='movieLInk' href={details.payload.homepage} target='blank'>Go to movie</a>

                        </td>
                        <td>

                          {
                            details.payload.genres.map((item) => {
                              {/* {console.log(item.name)} */ }
                              return (<span >{item.name}</span>)
                            })
                          }
                        </td>
                        <td>{details.payload.original_language}</td>
                      </tr>
                    </tbody>
                  </table>


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
