import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import './styles/style.css'
function App() {
  const [name , setName] = useState('')
  const [showinput , setShowInput] = useState(false)
  const [editname , setEditName] = useState('')
const store = useSelector(state => state)
const dispatch = useDispatch()
const handleAddClick = (name) => {
  dispatch({type : 'add',payload:name})
  setName('')
}
const handleDelete = (id) => {
  dispatch({type : 'delete',payload:id})
}
const handleEdit = (id,name) => {
  
  setShowInput(true)
  if(!showinput) return;
  dispatch({type : 'edit',payload:{id , name}})
  setEditName('')
  setShowInput(false)
}

  return (
    <div>
      <input type="text" onChange={e => setName(e.target.value)} value={name}/>
      <button onClick={() => handleAddClick(name)}>add</button>
      {
        store.map(e=> {
          return(
          <div key={e.id}>
          <span>{e.name}</span>
          <button  onClick={() => handleDelete(e.id)} >X</button>
          <button onClick={() => handleEdit(e.id,editname)}>Edit</button>
          </div>
          )
        })
      }
      {showinput && <input type="text" onChange={e => setEditName(e.target.value)} value={editname}/>}
    </div>
  )
}

export default App
