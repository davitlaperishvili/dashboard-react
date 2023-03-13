import React, {useState} from 'react'
import Card from '../mainContent/card/Card'
import AddNewTodo from './todoElements/AddNewTodo'
import TodoItems from './todoElements/TodoItems'
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
export default function Todo() {
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
  function createItem(value: {
    title: string,
    tags?: todoTags[]
  }): void {
    console.log("Clicked")
    const newTask = {
      id: (tasks.length + 1).toString(),
      title: value.title,
      done: false,
      tags: value.tags
    }
    const tasksClone = [...tasks, newTask];
    console.log(tasksClone)
    setTasks(tasksClone)
  }
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
        <AddNewTodo createItem={createItem}/>
        <TodoItems todoList={tasks} changeTaskStatus={changeTaskStatus}/>
      </div>
  )
}
