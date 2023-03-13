import React, {useState} from 'react'
interface propsType {
  createItem: any
}
interface todoTags {
  title: string;
  color: string
}
export default function AddNewTodo(props: propsType) {
  const [value, setValue] = useState<{
    title: string;
    tags?: todoTags[]
  }>({
    title: "",
    tags: []
  })
  function handleChange(e:React.ChangeEvent<HTMLInputElement> ) {
    setValue({
      title: e.target.value
    })
  }
  return (
    <div className="add_new_todo">
      <input 
        type="text" 
        value={value.title} 
        name="title" 
        onChange={e => handleChange(e)} 
        placeholder="Create New Task"
        onKeyDown={ e => {
          console.log(e.code)
          if(e.code === "Enter"){
            props.createItem(value, setValue);
            setValue({
              title: ""
            })
          }
        }} 
      />
      <div className="add_btn" onClick={() => {
        props.createItem(value, setValue);
        setValue({
          title: ""
        })
      }}>
        <i className="ri-add-line"></i>
      </div>
    </div>
  )
}
