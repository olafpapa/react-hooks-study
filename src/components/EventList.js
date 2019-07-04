import Event from './Event'
import React from 'react'

const EventList = ({ state, dispatch }) => {

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
        { state.map((event, index) => (<Event key={ index } event={ event } dispatch={ dispatch }/>)) }
        </tbody>
      </table>
    </>
  )
}
export default EventList
