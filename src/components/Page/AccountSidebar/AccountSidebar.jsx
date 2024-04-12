import React from 'react'
import './AccountSidebar.scss';
import ProfileComponent from 'components/Inputs/ProfileComponent/ProfileComponent';
import Menu from 'assets/image/Icons/menu.png'
import Group from 'assets/image/Icons/group.png'
import Message from 'assets/image/Icons/message.png'
import Call from 'assets/image/Icons/call.png'
import Setting from 'assets/image/Icons/setting.png'
import Logout from 'assets/image/Icons/logout-icon.png'
import Help from 'assets/image/Icons/help-icon.png'
import ProfileImg from 'assets/image/Profile/Ac-profile.png'

const AccountSidebar = () => {
    const Icons = [
        {
            icon: Menu,
            title: 'Menu'
        },
        {
            icon: Group,
            title: 'Group'
        },
        {
            icon: Message,
            title: 'Message'
        },
        {
            icon: Call,
            title: 'Call'
        },
        {
            icon: Setting,
            title: 'Setting'
        }
    ]
  return (
    <div className='account-sidebar-container'>
        <div className='account-sidebar-menu'>
            <div className='account-sidebar-profile'>
                <ProfileComponent src={ProfileImg} />
            </div>
            <div className='account-sidebar-fuction-buttons'>
                {Icons?.map((image) => (
                    <div className='account-sidebar-fuction-button'>
                        <img src={image.icon} alt={image.title}/>
                    </div>
                ))}
            </div>
        </div>
        <div className='account-sidebar-footer'>
            <div className='account-sidebar-footer-icon'>
                <img src={Logout} alt='logout'/>
            </div>
            <div className='account-sidebar-footer-icon'>
                <img src={Help} alt='help'/>
            </div>
        </div>
    </div>
  )
}

export default AccountSidebar