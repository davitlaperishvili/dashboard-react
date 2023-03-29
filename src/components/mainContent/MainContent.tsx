import React from 'react'
import { Chart } from "react-google-charts";
import Header from '../header/Header';
import Card from './card/Card';
import ChartElem from '../elements/chart/ChartElem';
import "./mainContent.scss"
import InfoCard from '../elements/infoCard/InfoCard';
import Todo from '../todo/Todo';
import Ticket from '../ticketsList/Ticket';
import { Routes, Route } from "react-router-dom";
import TicketsPage from '../pages/tickets/TicketsPage';
import HomePage from '../pages/home/HomePage';



export default function MainContent() {
  return (
    <section className="main_content">
      <Header title="Overview"/>
      <div className="main_content_wrap">
        <Routes>
          <Route
              index
              path="/dashboard-react"
              element={<HomePage/>}
            ></Route>
          <Route
              index
              path="/dashboard-react/tickets"
              element={<TicketsPage/>}
            ></Route>
        </Routes>
      </div>
    </section>
  )
}
