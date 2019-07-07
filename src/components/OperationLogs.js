import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import OperationLog from './OperationLog'
import { DELETE_ALL_OPERATION_LOGS } from '../actions'

const OperationLogs = () => {
  const {state, dispatch} = useContext(AppContext)

  const deleteAllOperationLogs = e => {
    e.preventDefault()
    const result = window.confirm('すべての操作ログを削除しますか？')
    if (result) {
      dispatch({
        type: DELETE_ALL_OPERATION_LOGS
      })
    }
  }

  return (
    <>
      <h4 className="mt-5">操作履歴</h4>
      <table className="table table-hover">
        <thead>
        <tr>
          <th scope="col">操作内容</th>
          <th scope="col">操作日時</th>
        </tr>
        </thead>
        <tbody>
        { state.operationLogs.map((log, index) => (<OperationLog key={ index } log={ log }/>)) }
        </tbody>
      </table>
      <button type="submit" className="btn btn-danger mb-2" disabled={ state.operationLogs.length === 0 }
              onClick={ deleteAllOperationLogs }>全ての操作ログを削除する
      </button>
    </>
  )
}
export default OperationLogs