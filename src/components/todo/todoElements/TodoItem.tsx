import React from 'react'

interface todoTags {
  title: string;
  color: string
}
interface todoProps {
  title: string;
  tags?: todoTags[];
}
export default function TodoItem(props: todoProps) {
  function renderTags() {
    return props.tags?.map( (item, key) => {
      return (
        <div key={key} className={`tag_item color-${item.color}`}>{item.title}</div>
      )
    })
  }
  return (
    <div className="todo_item full_width">
      <div className="todo_item_wrap">
        <div className="left">
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
