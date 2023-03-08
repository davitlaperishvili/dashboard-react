import React, { ReactComponentElement } from 'react'
import TodoItem from './TodoItem'
import "./todoItem.scss";
interface todoTags {
  title: string;
  color: string
}
interface todoProps {
  title: string;
  tags?: todoTags[];
}
const todoList:todoProps[] = [
  {
    title: "Update ticket report",
    tags: [
      {
        title: "Urgent",
        color: "primary"
      },
      {
        title: "New",
        color: "success"
      },
      {
        title: "Default",
        color: "info"
      },
    ]
  },
  {
    title: "Update ticket report",
    tags: [
      {
        title: "Urgent",
        color: "primary"
      }
    ]
  },
  {
    title: "Create new ticket example",
    tags: [
      {
        title: "Default",
        color: "info"
      },
    ]
  }
]
export default function TodoItems() {
  function renderItems(data: todoProps[] ): any {
    return data.map( (item, index)  => {
      return <TodoItem key={index} title={item.title} tags={item.tags}/>
    })
  }
  return (
    <div className="todo_items">
      {renderItems(todoList)}
    </div>
  )
}
