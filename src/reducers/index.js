const events = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_EVENT':
      const event = { title: action.title, body: action.body }
      const len = state.length
      const id = len === 0 ? 1 : state[len - 1].id + 1
      return [...state, { id, ...event }]

    case 'DELETE_EVENT':
      return state.filter(event => event.id !== action.id)

    case 'DELETE_ALL_EVENTS':
      return []

    default:
      return state

  }
}
export default events
