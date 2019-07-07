import Event from './Event'
import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'

const EventList = () => {
  const { state } = useContext(AppContext)
  return (
    <>
      <h4 className="mt-5">イベント一覧</h4>
      <table className="table table-hover">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">タイトル</th>
          <th scope="col">ボディ</th>
          <th/>
        </tr>
        </thead>
        <tbody>
        { state.events.map((event, index) => (<Event key={ index } event={ event }/>)) }
        </tbody>
      </table>
    </>
  )
}
export default EventList
