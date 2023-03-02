import React from 'react'
import "./userInfo.scss"

export default function UserInfo() {
  return (
    <div className="user_info">
      <div className="user_Actions">
        <i className="ri-search-eye-line"></i>
        <i className="ri-notification-4-line"></i>
      </div>
      <div className="user_profile">
        <div className="name">Jones Ferdinand</div>
        <figure>
          <img src="./images/user.png" alt="" />
        </figure>
      </div>
    </div>
  )
}
