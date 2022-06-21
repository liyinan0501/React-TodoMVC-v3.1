import { useDispatch } from 'react-redux'
import { delTodo } from '../store/actions/todos'

export default function TodoItem({ item }) {
  const dispatch = useDispatch()
  const del = (id) => {
    dispatch(delTodo(id))
  }
  return (
    <li className={item.done ? 'completed' : ''}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={item.done} />
        <label>{item.name}</label>
        <button className="destroy" onClick={() => del(item.id)} />
      </div>
      <input className="edit" defaultValue="Create a TodoMVC template" />
    </li>
  )
}
