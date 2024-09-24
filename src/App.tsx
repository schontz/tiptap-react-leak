import {useState} from 'react'
import Editor from './Editor'

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Welcome to the tiptap editor leak detector. I can repro leaks by the following:</p>
      <ol>
        <li>Take a memory snapshot and see there is one Editor</li>
        <li>Repeast the following 3x:
          <ol>
            <li>Edit the content below in any way (delete or add some letters)</li>
            <li>Increment count:
              <button onClick={() => setCount(count + 1)}>count: {count}</button>
            </li>
          </ol>
        </li>
        <li>Take another snapshot and see there are 4 editors instead of one</li>
      </ol>
      <hr />
      <Editor key={count} />
      <hr />
      <p>Forked from <a href="https://github.com/ueberdosis/tiptap/tree/main/demos/src/Examples/Default/React">Default React Demo</a>.</p>
    </div>
  )
}

export default App

