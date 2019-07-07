import React, { useEffect, useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers'
import EventForm from './EventForm'
import EventList from './EventList'
import OperationLogs from './OperationLogs'
import AppContext from '../contexts/AppContext'

const LOCAL_STORAGE_KEY = 'data'

const App = () => {
  const savedState = localStorage.getItem(LOCAL_STORAGE_KEY)
  const initialState = savedState ? JSON.parse(savedState) : {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
    }, [state]
  )

  return (
    <AppContext.Provider value={ {state, dispatch} }>
      <div className="container-fluid">
        <EventForm/>
        <EventList/>
        <OperationLogs/>
      </div>
    </AppContext.Provider>

  )
}
export default App
