import React from 'react'
import AccountSidebar from '../AccountSidebar/AccountSidebar'
import MessageDisplay from '../MessageDisplay/MessageDisplay'
import ChatSpace from '../ChatSpace/ChatSpace'
import './Layout.scss'
import AccountInfo from '../AccountInfo/AccountInfo'
const Layout = () => {
  return (
    <div className='layout-display-container'>
        <div className="account-sidebar-layout">
          <AccountSidebar/>
        </div>
        <div className="account-chatSpace-layout">
          <ChatSpace/>
        </div>
        <div className="account-messageDisplay-layout">
          <MessageDisplay/>
        </div>
        <div className="account-info-layout">
          <AccountInfo/>
        </div>
    </div>
  )
}

export default Layout