import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../store/actions/filter'

const TodoFooter = () => {
  const arr = ['all', 'active', 'completed']
  const filterName = useSelector((state) => state.filter)
  const dispatch = useDispatch()
  const filter = (item) => {
    dispatch(changeFilter(item))
  }
  const leftTodo = useSelector((item) => item.todos).filter(
    (item) => !item.done
  ).length
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{leftTodo}</strong> item left
      </span>
      <ul className="filters">
        {arr.map((item) => (
          <li key={item}>
            <a
              href="#/"
              className={filterName === item ? 'selected' : ''}
              onClick={() => filter(item)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}

export default TodoFooter
