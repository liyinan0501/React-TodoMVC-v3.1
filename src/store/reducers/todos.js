export default function todos(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case 'GET_LIST':
      return payload

    case 'ADD_TODO':
      return [...state, payload]

    case 'DEL_TODO':
      return state.filter((item) => item.id !== payload)

    default:
      return state
  }
}
