import './App.css'
import Editor from './SunEditor/Editor'

function App() {

  const abc ="<p>hiiiiiiiii</p>"

  const onSubmit=(content)=>{
    console.log("Submitted Content ",content)
  }

  return (
    <div className="App">
      <Editor initialContent={abc} onSubmit={onSubmit}></Editor>
    </div>
  )
}

export default App
