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
interface todoListType {
  todoList: todoProps[];
  changeTaskStatus: any
}
export default function TodoItems(props: todoListType) {

  function renderItems(data: todoProps[] ): any {
    return data.map( (item, index)  => {
      return <TodoItem key={index} id={item.id} title={item.title} tags={item.tags} done={item.done} changeTaskStatus={props.changeTaskStatus}/>
    })
  }
  return (
    <div className="todo_items">
      {renderItems(props.todoList)}
    </div>
  )
}
