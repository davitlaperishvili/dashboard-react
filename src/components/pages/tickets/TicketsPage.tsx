import React from 'react'
import Card from '../../mainContent/card/Card'
import AllTickets from './components/AllTickets'

export default function TicketsPage() {
  return (
    <div className="grids_wrap no_border gap-2">
      <Card classList="grid-12 border_all">
        <AllTickets/>
      </Card>
    </div>
  )
}
