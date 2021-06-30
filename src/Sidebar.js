import React from 'react'
import './Sidebar.css'
import {useSelector} from 'react-redux'
import { Avatar } from '@material-ui/core'
import { selectUser } from './features/userSlice'

function Sidebar() {

    const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )


    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src='https://media-exp1.licdn.com/dms/image/C4D16AQE3z2RfyP7mNw/profile-displaybackgroundimage-shrink_350_1400/0/1607858662758?e=1630540800&v=beta&t=rLLKIprJZ9N8rv-ZP_05g_uay9qBmjBSWExKI8Kk9fs' alt='' />
                <Avatar src={user.photoUrl} className='sidebar__avatar' >{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>Who viewed you</p>
                    <p className='sidebar__statNumber'>927</p>
                </div>
                <div className='sidebar__stat'>
                    <p>Views on post</p>
                    <p className='sidebar__statNumber'>1679</p>
                </div>
            </div>

            <div className='sidebar__bottom'>
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('software')}
                {recentItem('faang')}
                {recentItem('webd')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default Sidebar
