import React from 'react'

interface todoTags {
  title: string;
  color: string
}
interface todoProps {
  id: string;
  title: string;
  tags?: todoTags[];
  done: boolean,
  changeTaskStatus: any
}
export default function TodoItem(props: todoProps) {
  function renderTags() {
    return props.tags?.map( (item, key) => {
      return (
        <div key={key} className={`tag_item color-${item.color}`}>{item.title}</div>
      )
    })
  }
  function isDone () {
    return props.done ? "done" : "";
  }
  return (
    <div className="todo_item full_width">
      <div className="todo_item_wrap">
        <div className={`left ${isDone()}`} onClick={() => {
          props.changeTaskStatus(props.id)
        }}>
          <div className="checkbox"></div>
          <div className="todo_title">{props.title}</div>
        </div>
        <div className="right tags">
          {renderTags()}
        </div>
      </div>
    </div>
  )
}
