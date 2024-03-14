import { useEffect, useState } from 'react';
import './App.css'
import { Button } from './components/Button'
import { Count } from './components/Count'

function App() {
  const [number, setNumber] = useState(0);
  const [isMore, setMore] = useState(true);

  useEffect(() => {
    if (number > 3) {
      setMore(false);
    } else {
      setMore(true);
    }
  }, [number]);

  // const handleClick = () => {
  //   setNumber(number + 1)
  // }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {
        isMore ? <Count number={number} /> : null
      }
      {/* <Button handleClick={handleClick} /> */}
      <Button setNumber={setNumber} isMore={isMore} />
    </div>
  )
}

export default App
