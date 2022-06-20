import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
const TodoList = () => {
  const list = useSelector((state) => state.todos)
  console.log()
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {list.map((item) => (
          <TodoItem item={item} key={item.id}></TodoItem>
        ))}
      </ul>
    </section>
  )
}

export default TodoList
