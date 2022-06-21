import { useDispatch } from 'react-redux'
import { delTodo, changeDone, changeName } from '../store/actions/todos'
import { useState, useRef, useEffect } from 'react'

export default function TodoItem({ item }) {
  const dispatch = useDispatch()

  const [currentItem, setCurrentItem] = useState('')

  const inputRef = useRef(null)

  const del = (id) => {
    dispatch(delTodo(id))
  }

  const change = (id, done) => {
    dispatch(changeDone(id, done))
  }

  const keyUp = (e, id) => {
    if (e.keyCode === 27) {
      setCurrentItem('')
    }
    if (e.keyCode === 13) {
      dispatch(changeName(id, e.target.value))
      setCurrentItem('')
    }
  }

  // Method 1:
  // const showEdit = async (id) => {
  //   await setCurrentItem(id)
  //   inputRef.current.focus()
  // }

  // Method 2:
  const showEdit = (id) => {
    setCurrentItem(id)
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [currentItem])

  return (
    <li
      className={[
        item.done ? 'completed' : '',
        item.id === currentItem ? 'editing' : '',
      ].join(' ')}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={item.done}
          onChange={(e) => change(item.id, e.target.checked)}
        />
        <label onDoubleClick={() => showEdit(item.id)}>{item.name}</label>
        <button className="destroy" onClick={() => del(item.id)} />
      </div>
      <input
        className="edit"
        defaultValue={item.name}
        ref={inputRef}
        onBlur={() => setCurrentItem('')}
        onKeyUp={(e) => keyUp(e, item.id)}
      />
    </li>
  )
}
