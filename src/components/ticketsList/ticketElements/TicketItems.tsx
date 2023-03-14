import React, { ReactComponentElement, useState } from 'react'
import TicketItem from './TicketItem'
import "./ticketItem.scss";

interface ticketProps {
  id: string;
  title: string;
  amount: number,
}
interface ticketListType {
  ticketList: ticketProps[];
}
export default function TicketItems(props: ticketListType) {

  function renderItems(data: ticketProps[] ): any {
    return data.map( (item, index)  => {
      return <TicketItem key={item.id} id={item.id} title={item.title} amount={item.amount} />
    })
  }
  return (
    <div className="todo_items">
      {renderItems(props.ticketList)}
    </div>
  )
}
