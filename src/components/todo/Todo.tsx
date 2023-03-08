import React from 'react'
import Card from '../mainContent/card/Card'
import TodoItems from './todoElements/TodoItems'

export default function Todo() {
  return (
      <div className="todo_wrap">
        <div className="todo_section_header">
          <div className="card_header">
            <div className="card_title">
              <span>Tasks</span>
            </div>
            <div className="card_subtitle">Today</div>
          </div>
        </div>
        <TodoItems/>
      </div>
  )
}
