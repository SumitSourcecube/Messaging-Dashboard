import React from 'react'
import './ProfileComponent.scss'
const ProfileComponent = ({src, alt, varient}) => {
  return (
    <div className='profile-container'>
        <div className={varient}>
            <img src={src} alt="" />
        </div>
    </div>
  )
}

export default ProfileComponent