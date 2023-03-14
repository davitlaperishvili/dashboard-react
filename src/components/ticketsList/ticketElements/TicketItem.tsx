import React from 'react'


interface ticketProps {
  id: string;
  title: string;
  amount: number,
}
export default function TicketItem(props: ticketProps) {
  return (
    <div className="ticket_item full_width">
      <div className="ticket_item_wrap">
        <div className={`left`}>
          <div className="ticket_title">{props.title}</div>
        </div>
        <div className="right">{props.amount}</div>
      </div>
    </div>
  )
}
