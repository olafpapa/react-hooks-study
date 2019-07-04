import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = props => {

  return (
    <div className="container-fluid">
      <h4 className="mt-3">イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input type="text" className="form-control" id="formEventTitle" aria-describedby="emailHelp"
                 placeholder="タイトルを入力してください"/>
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディ</label>
          <textarea type="text" className="form-control" id="formEventBody" placeholder="ボディを入力してください"/>
        </div>
        <button type="submit" className="btn btn-primary">イベント作成する</button>
        <button type="submit" className="btn btn-danger ml-2">全てのイベントを削除する</button>
      </form>

      <h4 className="mt-5">イベント一覧</h4>
      <table className="table table-hover">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">タイトル</th>
          <th scope="col">ボディ</th>
        </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  )
}


export default App
