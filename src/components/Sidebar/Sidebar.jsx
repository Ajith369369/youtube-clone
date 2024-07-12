import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <>
    <div className="sidebar">
        <div className="sidebar-link">
             <img src="./public/images/home.svg"/>
             <div>Home</div>
        </div>
        <div className="sidebar-link">
            <img src="./public/images/shorts.svg"/>
            <div>Shorts</div>
        </div>
        <div className="sidebar-link">
            <img src="./public/images/subscriptions.svg"/>
            <div>Subscriptions</div>
        </div>
        <div className="sidebar-link">
            <img src="./public/images/you.svg"/>
            <div>You</div>
        </div>
        <div className="sidebar-link">
            <img src="./public/images/history.svg"/>
            <div>History</div>
        </div>
    </div>
    </>
  )
}

export default Sidebar