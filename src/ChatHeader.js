import React from 'react'

import NotificationIcon from '@material-ui/icons/Notifications'
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded'
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import HelpRoundedIcon from '@material-ui/icons/HelpRounded'
import SendRoundedIcon from '@material-ui/icons/SendRounded'

import "./ChatHeader.css"

function ChatHeader({ channelName }) {
    return (
        <div className="chatHeader">
            <div className="chatHeader_left">
                <h3>    
                    <span className="chatHeader_hash"> # </span>
                    {channelName}
                </h3>
            </div>

            <div className="chatHeader_right">
                <NotificationIcon />
                <EditLocationRoundedIcon />
                <PeopleAltRoundedIcon />     

                <div className="chatHeader_search">
                    <input placeholder="Search" />
                    <SearchRoundedIcon />
                </div> 

                <SendRoundedIcon />
                <HelpRoundedIcon />
            </div>
        </div>
    )
}

export default ChatHeader
