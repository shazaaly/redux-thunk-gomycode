import React from 'react'
import '../Header/header.scss'
import userImage from '../../images/userProfile.jpg'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div className='header'>
            <Link className='logo' to='/'>
                <div >
                    Moovy
                </div>
            </Link>


            <div className='user_image'>
                <img src={userImage} alt='user-profile-image' />
            </div>
        </div>
    )
}
