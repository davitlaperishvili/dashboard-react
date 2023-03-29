import React from 'react'

interface ticketsType {
  id: string;
  ticketSubject: string;
  updateTime: string;
  customerName: string;
  createDate: string;
  createTime: string;
  ticketPriority: string;
}
const tickets: ticketsType[] = [
  {
    id: "11",
    ticketSubject: "Contact Email not Linked",
    updateTime: "Updated 1 day ago",
    customerName: "Tom Cruise",
    createDate: "on 24.05.2019",
    createTime: "6:30 PM",
    ticketPriority: "High"
  },
  {
    id: "12",
    ticketSubject: "Contact Email not Linked",
    updateTime: "Updated 1 day ago",
    customerName: "Tom Cruise",
    createDate: "on 24.05.2019",
    createTime: "6:30 PM",
    ticketPriority: "High"
  },
  {
    id: "13",
    ticketSubject: "Contact Email not Linked",
    updateTime: "Updated 1 day ago",
    customerName: "Tom Cruise",
    createDate: "on 24.05.2019",
    createTime: "6:30 PM",
    ticketPriority: "High"
  },
  {
    id: "14",
    ticketSubject: "Contact Email not Linked",
    updateTime: "Updated 1 day ago",
    customerName: "Tom Cruise",
    createDate: "on 24.05.2019",
    createTime: "6:30 PM",
    ticketPriority: "High"
  },
  {
    id: "15",
    ticketSubject: "Contact Email not Linked",
    updateTime: "Updated 1 day ago",
    customerName: "Tom Cruise",
    createDate: "on 24.05.2019",
    createTime: "6:30 PM",
    ticketPriority: "High"
  },
  {
    id: "16",
    ticketSubject: "Contact Email not Linked",
    updateTime: "Updated 1 day ago",
    customerName: "Tom Cruise",
    createDate: "on 24.05.2019",
    createTime: "6:30 PM",
    ticketPriority: "High"
  },
  {
    id: "17",
    ticketSubject: "Contact Email not Linked",
    updateTime: "Updated 1 day ago",
    customerName: "Tom Cruise",
    createDate: "on 24.05.2019",
    createTime: "6:30 PM",
    ticketPriority: "High"
  },
  {
    id: "18",
    ticketSubject: "Contact Email not Linked",
    updateTime: "Updated 1 day ago",
    customerName: "Tom Cruise",
    createDate: "on 24.05.2019",
    createTime: "6:30 PM",
    ticketPriority: "High"
  },
  {
    id: "19",
    ticketSubject: "Contact Email not Linked",
    updateTime: "Updated 1 day ago",
    customerName: "Tom Cruise",
    createDate: "on 24.05.2019",
    createTime: "6:30 PM",
    ticketPriority: "High"
  },
  {
    id: "21",
    ticketSubject: "Contact Email not Linked",
    updateTime: "Updated 1 day ago",
    customerName: "Tom Cruise",
    createDate: "on 24.05.2019",
    createTime: "6:30 PM",
    ticketPriority: "High"
  },
  {
    id: "22",
    ticketSubject: "Contact Email not Linked",
    updateTime: "Updated 1 day ago",
    customerName: "Tom Cruise",
    createDate: "on 24.05.2019",
    createTime: "6:30 PM",
    ticketPriority: "High"
  },
]

export default function TicketsList() {
  return (
    <div className="tickets_list_page_list">
      <div className="list_header tickets_list">
        <ul>
          <li>Ticket details</li>
          <li>Customer name</li>
          <li>Date</li>
          <li>Priority</li>
          <li></li>
        </ul>
      </div>
      <div className="tickets_list tickets">

      </div>
    </div>
  )
}
