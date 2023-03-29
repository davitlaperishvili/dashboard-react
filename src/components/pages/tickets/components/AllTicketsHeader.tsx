import React from 'react'

export default function AllTicketsHeader() {
  return (
    
    <div className="card_header d-flex justify-content-between">
      <div className="card_title">
        <span>All tickets</span>
      </div>
      <div className="header_actions">
        <div className="sort action_item">
          <span>Sort</span>
        </div>
        <div className="filter action_item">
          <span>Filter</span>
        </div>
      </div>
    </div>
  )
}
