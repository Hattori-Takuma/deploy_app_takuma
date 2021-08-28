import React, { useState } from 'react'

const Page2 = () => {






  const [hand, setHand] = useState("");

  const gu = () => {
    const gu = 1
    console.log(1)
    setHand("ぐー")
  };

  const choki = () => {


    setHand("ちょき")
  };

  const pa = () => {


    setHand("ぱー")
  };





  //const [Cpu, setCpu] = useState("");

  //const random = Math.floor(Math.random() * 3)


  const GU = 1;
  const CHOKI = 2;
  const PA = 3;




  let com = Math.floor(Math.random() * 3) + 1;
  // コンピュータの手の名前
  let comHandName = '';
  switch (com) {
    case GU:
      comHandName = 'グー';
      break;
    case CHOKI:
      comHandName = 'チョキ';
      break;
    case PA:
      comHandName = 'パー';
      break;
  }





  //if (random === 0) {setCpu("GU")}else if (random === 1) {setCpu("pa")}
  //else {setCpu("cyoki")}


  let result = '';
  if (setHand === com) {
    result = '結果はあいこでした。';
  } else if ((com === GU && useState === pa) || (com === CHOKI && useState === gu) || (com === PA && useState === choki)) {
    result = '勝ちました。';
  } else {
    result = '負。';
  }






  console.log(com)


  return (
    <div>
      <h1>level6,level7

      </h1>

      <button onClick={gu}>ぐー</button>
      <button onClick={choki}>ちょき</button>
      <button onClick={pa}>ぱー</button>
      <div>あなたの手:{hand}</div>
      <div>CPUの手：{comHandName}</div>
      {com}

      {result}


    </div>
  )
}

export default Page2
