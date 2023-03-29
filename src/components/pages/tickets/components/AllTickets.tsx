import React from 'react'
import AllTicketsFooter from './AllTicketsFooter'
import AllTicketsHeader from './AllTicketsHeader'
import TicketsList from './TicketsList'

export default function AllTickets() {
  return (
    <div className="tickets_page">
      
      <AllTicketsHeader/>
      <TicketsList/>
      <AllTicketsFooter/>
    </div>
  )
}
