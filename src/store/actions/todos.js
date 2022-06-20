import axios from 'axios'

export const getList = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:8888/todos')
    console.log(res)
    dispatch({
      type: 'GET_LIST',
      payload: res.data,
    })
  }
}

export default function addTodo(name) {
  return async (dispatch) => {
    const res = await axios.post('http://localhost:8888/todos', {
      name,
      done: false,
    })
    dispatch({
      type: 'ADD_TODO',
      payload: res.data,
    })
  }
}
