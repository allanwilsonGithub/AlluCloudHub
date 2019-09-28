import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return (
    <div>
      <select>
        <option value="0">Select recipe:</option>
        <option value="1">Bataati Keitto</option>
        <option value="2">Nakki Keitto</option>
        <option value="3">Carbonara</option>
      </select>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))