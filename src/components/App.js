import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers'
import EventForm from './EventForm'
import EventList from './EventList'
import AppContext from '../contexts/AppContext'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={ { state, dispatch } }>
      <div className="container-fluid">
        <EventForm/>
        <EventList/>
      </div>
    </AppContext.Provider>

  )
}
export default App
