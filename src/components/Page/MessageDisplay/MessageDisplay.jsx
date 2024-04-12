import React from 'react'
import './MessageDisplay.scss'
import VoiceCall from 'assets/image/Icons/voice-call-icon.png'
import VideoCall from 'assets/image/Icons/video-call-icon.png'
import Menu from 'assets/image/Icons/header-menu.png'
import ProfileComponent from 'components/Inputs/ProfileComponent'
import MessageReaded from 'assets/image/Icons/message-read-icon-green.png' 
import OwnerProfile from  'assets/image/Profile/chat-img-2.png'
import ParticipantProfile from 'assets/image/Profile/chat-img-1.png'
import ProfileImg from 'assets/image/Profile/Profile-main-md.png'
import VideoTool from 'assets/image/Icons/message-video.png'
import AudioTool from 'assets/image/Icons/message-audio.png'
import Attchtool from 'assets/image/Icons/message-attach.png'
import Emojitool from 'assets/image/Icons/message-emoji.png'
import Clibboardtool from 'assets/image/Icons/message-clipboard.png'
import Menutool from 'assets/image/Icons/message-menu.png'
import SenButton from 'assets/image/Icons/message-send-btn.png'
const MessageDisplay = () => {
  return (
    <div className='message-display-container'>
        <div className='message-display-header'>
            <div className="display-header-profile-name">
                <ProfileComponent src={ProfileImg} />
                <div className='display-header-name-status'>
                    <span id='dispplay-account-name'>Robert Fox</span>
                    <div id='display-account-status'><div id='account-active'></div>Active Now</div>
                </div>
            </div>
            <div className="display-header-connect">
                <div id='common-icon-div'><img src={VoiceCall} alt="VoiceCall" /></div>
                <div id='common-icon-div'><img src={VideoCall} alt="VideoCall" /></div>
                <div id='common-icon-div'><img src={Menu} alt="Menu" /></div>
            </div>
        </div>
        <div id="message-display-card-div">
            <div className="message-display-card">
                <div id='message-display-participant-message'>
                    <div className="message-by-participant">
                        <div className='participant-profile'><ProfileComponent src={ParticipantProfile}/></div>
                        <div className="message-by-participant">
                            <div className='message-text-time'>
                                <div className="message-display-message-text-participant">
                                    <div id='message-display-message-text-participant'><span>Got it. And what's your take on incorporating animations? I've seen them on many sites lately.</span></div>
                                </div>
                                <div className='message-displaye-message-time-participant'><span>10:52 AM</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="message-display-own-message">
                    <div className="message-by-owner">
                        <div className='message-text-time'>
                            <div className="message-display-message-text">
                                <div id='message-display-message-text'><span>Animations can enhance user engagement, but use them judiciously. Subtle animations for transitions or highlighting elements can make the site feel dynamic without overwhelming users.</span></div>
                            </div>
                            <div className='message-displaye-message-time'><img src={MessageReaded} alt="" /><span>10:52 AM</span></div>
                        </div>
                        <div className='messanger-profile'><ProfileComponent src={OwnerProfile}/></div>
                    </div>
                </div>
                <div id='message-display-participant-message'>
                    <div className="message-by-participant">
                        <div className='participant-profile'><ProfileComponent src={ParticipantProfile}/></div>
                        <div className="message-by-participant">
                            <div className='message-text-time'>
                                <div className="message-display-message-text-participant">
                                    <div id='message-display-message-text-participant'><span>That makes sense. How about mobile responsiveness? It's a must nowadays, right?</span></div>
                                </div>
                                <div className='message-displaye-message-time-participant'><span>10:52 AM</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="message-display-own-message">
                    <div className="message-by-owner">
                        <div className='message-text-time'>
                            <div className="message-display-message-text">
                                <div id='message-display-message-text'><span>Absolutely. More users access websites from mobile devices. Design for mobile-first, ensuring that the site looks and functions well on smaller screens.</span></div>
                            </div>
                            <div className='message-displaye-message-time'><img src={MessageReaded} alt="" /><span>11:12 AM</span></div>
                        </div>
                        <div className='messanger-profile'><ProfileComponent src={OwnerProfile}/></div>
                    </div>
                </div>
                <div id='message-display-participant-message'>
                    <div className="message-by-participant">
                        <div className='participant-profile'><ProfileComponent src={ParticipantProfile}/></div>
                        <div className="message-by-participant">
                            <div className='message-text-time'>
                                <div className="message-display-message-text-participant">
                                    <div id='message-display-message-text-participant'><span>Good point. Typography is another aspect I'm curious about. Any font suggestions for a modern look?</span></div>
                                </div>
                                <div className='message-displaye-message-time-participant'><span>10:52 AM</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="message-display-own-message">
                    <div className="message-by-owner">
                        <div className='message-text-time'>
                            <div className="message-display-message-text">
                                <div id='message-display-message-text'><span>Absolutely. More users access websites from mobile devices. Design for mobile-first, ensuring that the site looks and functions well on smaller screens.</span></div>
                            </div>
                            <div className='message-displaye-message-time'><img src={MessageReaded} alt="" /><span>11:12 AM</span></div>
                        </div>
                        <div className='messanger-profile'><ProfileComponent src={OwnerProfile}/></div>
                    </div>
                </div>
                <div id='message-display-participant-message'>
                    <div className="message-by-participant">
                        <div className='participant-profile'><ProfileComponent src={ParticipantProfile}/></div>
                        <div className="message-by-participant">
                            <div className='message-text-time'>
                                <div className="message-display-message-text-participant">
                                    <div id='message-display-message-text-participant'><span>That makes sense. How about mobile responsiveness? It's a must nowadays, right?</span></div>
                                </div>
                                <div className='message-displaye-message-time-participant'><span>10:52 AM</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id='message-writing-space'>
            <div className='message-writing-input'>
                <textarea type="text"/>
            </div>
            <div className='message-writing-space-tools'>
                <div className="writing-space-tool">
                    <div className='message-video-audio'>
                        <img src={VideoTool} alt="VideoTool" />
                        <img src={AudioTool} alt="AudioTool" />
                    </div>
                    <div className="message-tool-line"></div>
                    <div className='message-emoji-tools-icon'>
                        <img src={Emojitool} alt="Emojitool" />
                        <img src={Attchtool} alt="Attchtool" />
                        <img src={Clibboardtool} alt="Clibboardtool" />
                    </div>
                    <div className="message-tool-line"></div>
                    <div className='message-menu-tools-icon'>
                        <img src={Menutool} alt="Menutool" />
                    </div>
                </div>
                <div className='writing-space-send-tool'>
                    <img src={SenButton} alt="SenButton" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MessageDisplay