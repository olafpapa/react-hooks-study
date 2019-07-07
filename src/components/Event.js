import React, { useContext } from 'react'
import { ADD_OPERATION_LOG, DELETE_EVENT } from '../actions'
import AppContext from '../contexts/AppContext'
import { currentTimeIos8601 } from '../utils'

const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext);
  const { id } = event
  const handleClickDeleteButton = () => {
    const result = window.confirm(`このイベント(id=${ id })を削除しますか？`)
    if (result) {
      dispatch({
        type: DELETE_EVENT,
        id
      })
      dispatch({
        type: ADD_OPERATION_LOG,
        description: `イベント(id=${id})を削除しました。`,
        operatedAt: currentTimeIos8601()
      })
    }
  }
  return (
    <tr>
      <td>{ id }</td>
      <td>{ event.title }</td>
      <td>{ event.body }</td>
      <td>
        <button type="button" className="btn btn-danger" onClick={ handleClickDeleteButton }>削除</button>
      </td>
    </tr>
  )

}
export default Event
