import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/notes'

const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
      </ul>
    </div>
  )
}



const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default App