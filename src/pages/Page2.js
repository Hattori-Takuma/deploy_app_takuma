import React, { useState } from 'react'

const Page2 = () => {






  const [hand, setHand] = useState("");

  const gu = () => {
    setHand("ぐー")
  };

  const choki = () => {
    setHand("ちょき")
  };

  const pa = () => {
    setHand("ぱー")
  };












  return (
    <div>
      <h1>level6

      </h1>

      <button onClick={gu}>ぐー</button>
      <button onClick={choki}>ちょき</button>
      <button onClick={pa}>ぱー</button>
      <div>あなたの手:{hand}</div>

    </div>
  )
}

export default Page2
