import React, { useContext, useState } from 'react'
import { CREATE_EVENT, DELETE_ALL_EVENTS } from '../actions'
import AppContext from '../contexts/AppContext'

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault()
    dispatch({
      type: CREATE_EVENT,
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
      dispatch({ type: DELETE_ALL_EVENTS })
    }
  }

  return (
    <>
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
          <textarea className="form-control" id="formEventBody" value={ body }
                    onChange={ e => setBody(e.target.value) } placeholder="ボディを入力してください"/>
        </div>
        <button type="submit" className="btn btn-primary" disabled={ !title || !body } onClick={ addEvent }>イベント作成する
        </button>
        <button type="submit" className="btn btn-danger ml-2" disabled={ state.events.length === 0 }
                onClick={ deleteAllEvents }>全てのイベントを削除する
        </button>
      </form>
    </>
  )
}
export default EventForm
