import { useState } from 'react'

function TodoApp() {
  const [list, setList] = useState({
    user:"",
    users:[],
  });

  const handleOnChange = (e)=>{
     setList({
       ...list,
       user:e
     })
  }
  
  const handleOnAdd = ()=>{
      setList({
        user:"",
        users : [
          ...list.users,
          {
          id: Date.now(),
          name: list.user,
          completed: false,
        }]
      })
  }

  const handleDelete = (id) =>{
    setList({
      ...list,
      users: list.users.filter((item) => item.id !== id)
    })
  }

  const handleOnClicked = (id) =>{
     setList({
      ...list,
       users: list.users.map((item) => (
         item.id === id ? {
          ...item,
          completed: !item.completed  
         }:
         {
          item
         }
       )
      )
     })
  }


  return (
    <>
      <h4>Enter Your Itesms</h4> 
      <div>
      <input 
       type='input' 
       placeholder ="enter something" 
       value={list.user}
       onChange = {(e) => handleOnChange(e.target.value)}
       />
      <button className = 'px-8'onClick = {handleOnAdd}>Add Item</button>
       </div>
       {
        list.users.map((item)=>(
          <div key = {item.id}> 
          <input 
          type='checkbox'
          checked= {item.completed}
          onChange = {()=> handleOnClicked(item.id)}
          />
          <p>{item.name}
           <button onClick = {()=> handleDelete(item.id)}>Delete</button>
          </p>
          </div>
        ))
       }

    </>
  )
}

export default TodoApp
