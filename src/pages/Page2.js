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




  const [Cpu, setCpu] = useState("");

  const random = Math.floor(Math.random() * 3)

  //if (random === 0) { setCpu("gu") } else { setCpu("pa") };



  if (random === 0) {
    setCpu("GU")
  }




  console.log(random)


  return (
    <div>
      <h1>level6,level7

      </h1>

      <button onClick={gu}>ぐー</button>
      <button onClick={choki}>ちょき</button>
      <button onClick={pa}>ぱー</button>
      <div>あなたの手:{hand}</div>
      <div>CPUの手：{Cpu}</div>
      {random}

    </div>
  )
}

export default Page2
