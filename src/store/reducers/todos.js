export default function todos(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case 'GET_LIST':
      return payload

    case 'ADD_TODO':
      return [...state, payload]

    default:
      return state
  }
}
