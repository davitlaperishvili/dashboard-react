import React from 'react'
import TicketItems from './ticketElements/TicketItems'

interface ticketProps {
  id: string;
  title: string;
  amount: number,
}
const ticketList:ticketProps[] = [
  {
    id: "1",
    title: "Waiting on Feature Request",
    amount: 235
  },
  {
    id: "2",
    title: "Awaiting Customer Response",
    amount: 235
  },
  {
    id: "3",
    title: "Awaiting Developer Fix",
    amount: 235
  },
  {
    id: "4",
    title: "Pending",
    amount: 235
  }
]
export default function Ticket() {
  return (
    <div className="ticket_wrap">
        <div className="ticket_section_header">
          <div className="card_header">
            <div className="card_title">
              <span>Unresolved tickets</span>
            </div>
            <div className="card_subtitle">Group: Support</div>
          </div>
        </div>
        <TicketItems ticketList={ticketList} />
      </div>
  )
}
