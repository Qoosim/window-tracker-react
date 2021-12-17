import React from 'react'
import WindowTracker from './components/WindowTracker'

function App() {
  const [show, setShow] = React.useState(true);

  function handleToggle() {
    setShow(prevShow => !prevShow)
  }

  return (
    <div className="container">
      <button
        onClick={handleToggle}
      >
        Toggle WindowTracker
      </button>
      {show && <WindowTracker />}
    </div>
  );
}

export default App;
