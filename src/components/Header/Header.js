import React, { useState } from 'react'
import '../Header/header.scss'
import userImage from '../../images/userProfile.jpg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { asyncFectchSeries, asyncFetchMovies } from '../../Features/Movies/MoviesSlice'


export const Header = () => {

    const dispatch = useDispatch()
    const [text, setText] = useState('');
    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(asyncFetchMovies(text))
        dispatch(asyncFectchSeries(text))
        
        
    }

    return (
        <div className='wrapper'>
            <div className='header'>
                <Link className='logo' to='/'>
                    <div >
                        Moovy
                    </div>
                </Link>

                <div className='search-bar'>
                    <form onSubmit={submitHandler}>
                        <input type='text' value={text} onChange={(e) => { setText(e.target.value) }} placeholder='search movies or series' />
                        <button type='submit'><FontAwesomeIcon icon={faSearch} /></button>
                    </form>


                </div>


                <div className='user_image'>
                    <img src={userImage} alt='user-profile-image' />
                </div>
            </div>
        </div>
    )
}
