import React, { useState } from 'react';
import { Button } from '@material-ui/core'
import './App.css';

const randomColorGenerator = () => Math.floor(Math.random() * 255)

function App() {
  const [red, setRed] = useState(randomColorGenerator())
  const [green, setGreen] = useState(randomColorGenerator())
  const [blue, setBlue] = useState(randomColorGenerator())

  const handleClick = () => {
    setRed(randomColorGenerator())
    setGreen(randomColorGenerator())
    setBlue(randomColorGenerator())
  }

  return (
    <div className="App" style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})`}}>
      <header className="Header">rgb ({red}, {green}, {blue})</header>
      <section className="Section">
        <Button onClick={handleClick} variant="contained"><b>Change Background</b></Button>
      </section>
    </div>
  );
}

export default App;
