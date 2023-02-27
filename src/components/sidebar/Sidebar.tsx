import React from 'react'
import "./sidebar.scss"
import SidebarMenu from './sidebarMenu/SidebarMenu'

export default function Sidebar() {
  return (
    <aside className='main_sidebar'>
      <div className="sidebar_container">
        <div className="sidebar_header">
          <div className="logo">
            <a href="">
              <i className="ri-dashboard-fill"></i>
              <span>Dashboard Kit</span>
            </a>
          </div>
        </div>
        <SidebarMenu/>
      </div>
    </aside>
  )
}
