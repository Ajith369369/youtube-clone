import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <>
    <div className="sidebar">
        <div className="sidebar-link">
             <img src="/images/home.svg"/>
             <div>Home</div>
        </div>
        <div className="sidebar-link">
            <img src="/images/shorts.svg"/>
            <div>Shorts</div>
        </div>
        <div className="sidebar-link">
            <img src="/images/subscriptions.svg"/>
            <div>Subscriptions</div>
        </div>
        <div className="sidebar-link">
            <img src="/images/you.svg"/>
            <div>You</div>
        </div>
        <div className="sidebar-link">
            <img src="/images/history.svg"/>
            <div>History</div>
        </div>
    </div>
    </>
  )
}

export default Sidebar