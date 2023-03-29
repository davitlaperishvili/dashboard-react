import React from 'react'
import "./sidebarMenu.scss"
import { NavLink } from "react-router-dom";
import MainContent from '../../mainContent/MainContent';
import TicketsPage from '../../pages/tickets/TicketsPage';

export default function SidebarMenu() {
  return (
    <div className="sidebar_menu">
      
      <ul>
        <li>
          <NavLink
              to="/dashboard-react/"
              end
            >
              <i className="ri-home-2-fill"></i>
              <span>Overview</span>
            </NavLink>
        </li>
        <li>
          <NavLink
              to="/dashboard-react/tickets"
              end
            >
              <i className="ri-coupon-fill"></i>
              <span>Tickets</span>
            </NavLink>
        </li>
        <li>
          <a href="">
            <i className="ri-lightbulb-fill"></i>
            <span>Ideas</span>
          </a>
        </li>
        <li>
          <a href="">
            <i className="ri-contacts-fill"></i>
            <span>Contacts</span>
          </a>
        </li>
        <li>
          <a href="">
            <i className="ri-user-3-fill"></i>
            <span>Agents</span>
          </a>
        </li>
        <li>
          <a href="">
            <i className="ri-article-fill"></i>
            <span>Articles</span>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="">
            <i className="ri-settings-5-fill"></i>
            <span>Settings</span>
          </a>
        </li>
        <li>
          <a href="">
            <i className="ri-mail-volume-fill"></i>
            <span>Subscription</span>
          </a>
        </li> 
      </ul>
    </div>
  )
}
