import React, { useReducer, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers'
import Event from './Event'

const App = () => {

  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault()
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body,
    })
    setTitle('')
    setBody('')
  }

  const deleteAllEvents = e => {
    e.preventDefault()
    const result = window.confirm('すべてのイベントを削除しますか？')
    if (result) {
      dispatch({type: 'DELETE_ALL_EVENTS'})
    }
  }

  return (
    <div className="container-fluid">
      <h4 className="mt-3">イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input type="text" className="form-control" id="formEventTitle" value={ title }
                 onChange={ e => setTitle(e.target.value) } aria-describedby="emailHelp"
                 placeholder="タイトルを入力してください"/>
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディ</label>
          <textarea type="text" className="form-control" id="formEventBody" value={ body }
                    onChange={ e => setBody(e.target.value) } placeholder="ボディを入力してください"/>
        </div>
        <button type="submit" className="btn btn-primary" disabled={!title || !body} onClick={ addEvent }>イベント作成する</button>
        <button type="submit" className="btn btn-danger ml-2" disabled={state.length === 0} onClick={ deleteAllEvents }>全てのイベントを削除する</button>
      </form>

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
    </div>
  )
}
export default App
