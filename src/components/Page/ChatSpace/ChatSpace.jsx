import React, { useState } from 'react'
import './ChatSpace.scss'
import MenuDotIcon from 'assets/image/Icons/header-menu.png'
import SearchLens from 'assets/image/Icons/search-lens.png'
import PlusIcon from 'assets/image/Icons/plus-icon.png'
import Chat1 from 'assets/image/User-profile/Ellipse 1.png'
import MessageReaded from 'assets/image/Icons/message-read-icon-green.png' 
import MessageTobeRead from 'assets/image/Icons/message-read-icon.png' 
import ProfileComponent from 'components/Inputs/ProfileComponent'
import BessieCooper from 'assets/image/User-profile/Bessie Cooper.png'
import KathrynMurphy from 'assets/image/User-profile/Kathryn Murphy.png'
import RobertFox from 'assets/image/User-profile/Robert Fox.png'
import GuyHawkins from 'assets/image/User-profile/Guy Hawkins.png'
import EleanorPena from 'assets/image/User-profile/Eleanor Pena.png'
import CourtneyHenry from 'assets/image/User-profile/Courtney Henry.png'
const ChatSpace = () => {
    const [activename, setActiveName] = useState('RobertFox');

    const handleActive = (name) => {
        setActiveName(name);
    }
    return (
        <div className='chatSpace-container'>
            <div className='chatSpace-header'>
                <span id='chatSpace-header-text'>Messages</span>
                <img src={MenuDotIcon} alt="MenuDotIcon" style={{cursor: 'pointer'}}/>
            </div>
            <div className="chatSpace-navItem">
                <div className='chatSpace-search-bar'>
                    <img src={SearchLens} alt="SearchLens" />
                    <input type="text" placeholder='Search for chats...' className='Chatspace-input-tag' />
                </div>
                <div>
                    <button className='chatSapce-nav-button'><img src={PlusIcon} alt="PlusIcon" />Start New Chat</button>
                </div>
            </div>
            <div className="chatSpace-body">
                <div className={activename === 'Chat1' ? 'chatSpace-chat-active' : 'chatSpace-chat-1'}>
                    <div className={activename === 'Chat1' ? "chatspace-befor-indicator-active" : "chatspace-befor-indicator"}></div>
                    <div className="chat-account-name-status" onClick={() => handleActive('Chat1')}>
                        <div className="chat-name-detail">
                            <ProfileComponent src={Chat1}/>
                            <div className="chat-account-name-text">
                                <span id='chatSpace-account-name'>Cameron Williamson</span>
                                <span id='chatSpace-account-message'>Not too bad, just trying to catch up on some work. How about you?</span>
                            </div>
                        </div>
                        <div className="chatSpace-status">
                            <span id='chatSpace-time'>5s</span>
                            <div id='chatSpace-message-number'><span >1</span></div>
                        </div>
                    </div>
                </div>
                <div className={activename === 'GuyHawkins' ? 'chatSpace-chat-active' : 'chatSpace-chat-1'}>
                    <div className={activename === 'GuyHawkins' ? "chatspace-befor-indicator-active" : "chatspace-befor-indicator"}></div>
                    <div className="chat-account-name-status" onClick={() => handleActive('GuyHawkins')}>
                        <div className="chat-name-detail">
                            <ProfileComponent src={GuyHawkins}/>
                            <div className="chat-account-name-text">
                                <span id='chatSpace-account-name'>Guy Hawkins</span>
                                <span id='chatSpace-account-message'>when will it be ready?</span>
                            </div>
                        </div>
                        <div className="chatSpace-status">
                            <span id='chatSpace-time'>5s</span>
                            <div id='chatSpace-message-readed'><img src={MessageReaded} alt="MessageReaded"/></div>
                        </div>
                    </div>
                </div>
                <div className={activename === 'RobertFox' ? 'chatSpace-chat-active' : 'chatSpace-chat-1'}>
                    <div className={activename === 'RobertFox' ? "chatspace-befor-indicator-active" : "chatspace-befor-indicator"}></div>
                    <div className="chat-account-name-status" onClick={() => handleActive('RobertFox')}>
                        <div className="chat-name-detail">
                            <ProfileComponent src={RobertFox}/>
                            <div className="chat-account-name-text">
                                <span id='chatSpace-account-name'>Robert Fox</span>
                                <span id='chatSpace-account-message'>Good point. Typography is another aspect I'm curious about. Any font suggestions for a modern look?</span>
                            </div>
                        </div>
                        <div className="chatSpace-status">
                            <span id='chatSpace-time'>18h</span>
                            <div id='chatSpace-message'><img src={MessageReaded} alt="MessageReaded" /></div>
                        </div>
                    </div>
                </div>
                <div className={activename === 'BessieCooper' ? 'chatSpace-chat-active' : 'chatSpace-chat-1'}>
                    <div className={activename === 'BessieCooper' ? "chatspace-befor-indicator-active" : "chatspace-befor-indicator"}></div>
                    <div className="chat-account-name-status" onClick={() => handleActive('BessieCooper')}>
                        <div className="chat-name-detail">
                            <ProfileComponent src={BessieCooper}/>
                            <div className="chat-account-name-text">
                                <span id='chatSpace-account-name'>Bessie Cooper</span>
                                <span id='chatSpace-account-message'>That's a good idea. I'll have to try that. So, what's the latest on the new client account we're wor</span>
                            </div>
                        </div>
                        <div className="chatSpace-status">
                            <span id='chatSpace-time'>1d</span>
                            <div id='chatSpace-message'><img src={MessageTobeRead} alt="MessageTobeRead" /></div>
                        </div>
                    </div>
                </div>
                <div className={activename === 'CourtneyHenry' ? 'chatSpace-chat-active' : 'chatSpace-chat-1'}>
                    <div className={activename === 'CourtneyHenry' ? "chatspace-befor-indicator-active" : "chatspace-befor-indicator"}></div>
                    <div className="chat-account-name-status" onClick={() => handleActive('CourtneyHenry')}>
                        <div className="chat-name-detail">
                            <ProfileComponent src={CourtneyHenry}/>
                            <div className="chat-account-name-text">
                                <span id='chatSpace-account-name'>Courtney Henry</span>
                                <span id='chatSpace-account-message'>Sure, that sounds good. I need to take a break from staring at my computer screen all day.</span>
                            </div>
                        </div>
                        <div className="chatSpace-status">
                            <span id='chatSpace-time'>12h</span>
                            <div id='chatSpace-message-number'><span >1</span></div>
                        </div>
                    </div>
                </div>
                <div className={activename === 'KathrynMurphy' ? 'chatSpace-chat-active' : 'chatSpace-chat-1'}>
                    <div className={activename === 'KathrynMurphy' ? "chatspace-befor-indicator-active" : "chatspace-befor-indicator"}></div>
                    <div className="chat-account-name-status" onClick={() => handleActive('KathrynMurphy')}>
                        <div className="chat-name-detail">
                            <ProfileComponent src={KathrynMurphy}/>
                            <div className="chat-account-name-text">
                                <span id='chatSpace-account-name'>Kathryn Murphy</span>
                                <span id='chatSpace-account-message'>Thanks, I appreciate it. Hey, do you want to grab lunch together later?</span>
                            </div>
                        </div>
                        <div className="chatSpace-status">
                            <span id='chatSpace-time'>2w</span>
                            <div id='chatSpace-message-number'><span >2</span></div>
                        </div>
                    </div>
                </div>
                <div className={activename === 'EleanorPena' ? 'chatSpace-chat-active' : 'chatSpace-chat-1'}>
                    <div className={activename === 'EleanorPena' ? "chatspace-befor-indicator-active" : "chatspace-befor-indicator"}></div>
                    <div className="chat-account-name-status" onClick={() => handleActive('EleanorPena')}>
                        <div className="chat-name-detail">
                            <ProfileComponent src={EleanorPena}/>
                            <div className="chat-account-name-text">
                                <span id='chatSpace-account-name'>Eleanor Pena</span>
                                <span id='chatSpace-account-message'>Love the game music! 🎵</span>
                            </div>
                        </div>
                        <div className="chatSpace-status">
                            <span id='chatSpace-time'>3h</span>
                            <div id='chatSpace-message'><img src={MessageReaded} alt="MessageReaded" /></div>
                        </div>
                    </div>
                </div>
                <div className='chatSpace-chat-1'>
                    <div className="chatspace-befor-indicator"></div>
                    <div className="chat-account-name-status" onClick={() => handleActive('Chat1')}>
                        <div className="chat-name-detail">
                            <ProfileComponent src={Chat1}/>
                            <div className="chat-account-name-text">
                                <span id='chatSpace-account-name'>Jenny Wilson</span>
                                <span id='chatSpace-account-message'>When will the contract be sent?</span>
                            </div>
                        </div>
                        <div className="chatSpace-status">
                            <span id='chatSpace-time'>3w</span>
                            <div id='chatSpace-message'><img src={MessageReaded} alt="MessageReaded" /></div>
                        </div>
                    </div>
                </div>
                <div className='chatSpace-chat-1'>
                    <div className="chatspace-befor-indicator"></div>
                    <div className="chat-account-name-status" onClick={() => handleActive('Chat1')}>
                        <div className="chat-name-detail">
                            <ProfileComponent src={Chat1}/>
                            <div className="chat-account-name-text">
                                <span id='chatSpace-account-name'>Cameron Williamson</span>
                                <span id='chatSpace-account-message'>Not too bad, just trying to catch up on some work. How about you?</span>
                            </div>
                        </div>
                        <div className="chatSpace-status">
                            <span id='chatSpace-time'>5s</span>
                            <div id='chatSpace-message-number'><span >5</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatSpace