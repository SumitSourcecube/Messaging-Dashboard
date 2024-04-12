import React from 'react'
import './AccountInfo.scss'
import CloseIcon from 'assets/image/Icons/close-icon.png'
import ProfileComponent from 'components/Inputs/ProfileComponent'
import ProfileIMG from 'assets/image/Profile/Ellipse 1 (3).png'
import NotificationIcon from 'assets/image/Icons/notification-toggle-icon.png'
import UpIcon from 'assets/image/Icons/up-arrow-icon.png'
import FileIcon from 'assets/image/Icons/file-icon.png'
import OptionIcon from 'assets/image/Icons/header-menu.png'
import IMG1 from 'assets/image/Account-img/img-1.png'
import IMG2 from 'assets/image/Account-img/img-2.png'
import IMG3 from 'assets/image/Account-img/img-3.png'
import IMG4 from 'assets/image/Account-img/img-4.png'
import IMG5 from 'assets/image/Account-img/img-5.png'
import IMG6 from 'assets/image/Account-img/img-6.png'
import BlockIcon from 'assets/image/Icons/block-icon.png'
const AccountInfo = () => {
    const accountImages = [
        {   
            id: '1',
            src: IMG1
        },
        {   
            id: '2',
            src: IMG2
        },
        {   
            id: '3',
            src: IMG3
        },
        {   
            id: '4',
            src: IMG4
        },
        {   
            id: '5',
            src: IMG5
        },
        {   
            id: '6',
            src: IMG6
        },
    ]
  return (
    <div className='account-info-container'>
        <div id="account-info-header">
            <img src={CloseIcon} alt="CloseIcon" />
        </div>
        <div id="account-info-body-card">
            <div className="account-info-body">
                <div className="profile-details">
                    <ProfileComponent src={ProfileIMG} />
                    <div className='account-profile-text'>
                        <span id='account-name'>Robert Fox</span>
                        <span id='account-user-name'>@robert.fox12</span>
                    </div>
                </div>
                <div className="profile-detail-line"></div>
                <div className="account-detail-notification">
                    <span>Notifications</span>
                    <img src={NotificationIcon} alt="NotificationIcon" />
                </div>
                <div className="profile-detail-line"></div>
                <div className="account-info-file-detail">
                    <div className="file-info-header">
                        <div><span id='file-header-title'>Recent Files</span> <span id='file-header-detail'> (25 files)</span></div>
                        <img src={UpIcon} alt="UpIcon" style={{cursor: 'pointer'}}/>
                    </div>
                    <div className="file-name-detail">
                        <div className="file-name-detail-info">
                            <img src={FileIcon} alt="FileIcon" />
                            <span className='file-detail-name'>Content.pdf</span>
                        </div>
                        <div className="option-div">
                            <img src={OptionIcon} alt="OptionIcon" />
                        </div>
                    </div>
                    <div className="file-name-detail">
                        <div className="file-name-detail-info">
                            <img src={FileIcon} alt="FileIcon" />
                            <span className='file-detail-name'>Branding.pdf</span>
                        </div>
                        <div className="option-div">
                            <img src={OptionIcon} alt="OptionIcon" />
                        </div>
                    </div>
                    <div className="file-name-detail">
                        <div className="file-name-detail-info">
                            <img src={FileIcon} alt="FileIcon" />
                            <span className='file-detail-name'>Design changes.pdf</span>
                        </div>
                        <div className="option-div">
                            <img src={OptionIcon} alt="OptionIcon" />
                        </div>
                    </div>
                    <div id='show-more-option'><span>Show more</span></div>
                </div>
                <div className="account-info-images">
                    <div className="account-info-header">
                        <div><span id='file-header-title'>Images </span> <span id='file-header-detail'> (12 files)</span></div>
                        <img src={UpIcon} alt="UpIcon" style={{cursor: 'pointer'}}/>
                    </div>
                    <div className="account-infor-image-container">
                        {accountImages?.map((image) => (
                            <div className="account-infor-image" key={image.id}>
                                <img src={image.src} alt={image.id} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div id="account-info-footer">
            <div className="block-user">
                <button className='block-user-button'><img src={BlockIcon} alt="Bl" />Block Robert</button>
            </div>
        </div>
        
    </div>
  )
}

export default AccountInfo