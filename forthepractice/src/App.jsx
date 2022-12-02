import { useState } from 'react'

import './App.css'
import YoutubeForm from './components/formiktutorial/YoutubeForm'
import DefaultSelect from './components/selecttutorial/defaultSelect'
import SingleSelect from './components/selecttutorial/singleSelect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <YoutubeForm/> */}
      {/* <SingleSelect/> */}
      <DefaultSelect />
    </div>
  );
}

export default App
