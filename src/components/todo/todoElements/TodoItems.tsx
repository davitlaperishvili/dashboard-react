import React, { ReactComponentElement, useState } from 'react'
import TodoItem from './TodoItem'
import "./todoItem.scss";
interface todoTags {
  title: string;
  color: string
}
interface todoProps {
  id: string;
  title: string;
  tags?: todoTags[];
  done: boolean
}
const todoList:todoProps[] = [
  {
    id: "1",
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
    ],
    done: false
  },
  {
    id: "2",
    title: "Update ticket report",
    tags: [
      {
        title: "Urgent",
        color: "primary"
      }
    ],
    done: true
  },
  {
    id: "3",
    title: "Create new ticket example",
    tags: [
      {
        title: "Default",
        color: "info"
      },
    ],
    done: false
  }
]
export default function TodoItems() {
  const [tasks, setTasks] = useState(todoList)
  console.log(tasks)
  function changeTaskStatus(id: string) {
    const tasksClone = [...tasks];
    tasksClone.map( item => {
      if(item.id == id) {
        item.done = !item.done
      }
    })
    setTasks(tasksClone)
  }

  function renderItems(data: todoProps[] ): any {
    return data.map( (item, index)  => {
      return <TodoItem key={index} id={item.id} title={item.title} tags={item.tags} done={item.done} changeTaskStatus={changeTaskStatus}/>
    })
  }
  return (
    <div className="todo_items">
      {renderItems(tasks)}
    </div>
  )
}
