import React, { useState } from 'react'

const Page2 = () => {






  const [hand, setHand] = useState("");

  const gu = () => {
    setHand("ぐー")
    console.log("gu")



  };

  const choki = () => {
    setHand("ちょき")
    return (
      { com }
    )

  };

  const pa = () => {
    setHand("ぱー")
    return (
      { com }
    )


  };

  let mainHand = '';
  switch (hand) {
    case "ぐー":
      mainHand = 1;
      break;
    case "ちょき":
      mainHand = 2;
      break;
    case "ぱー":
      mainHand = 3;
      break;
  }





  //const [Cpu, setCpu] = useState("");

  //const random = Math.floor(Math.random() * 3)


  const GU = 1;
  const CHOKI = 2;
  const PA = 3;




  const com = Math.floor(Math.random() * 3) + 1;


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
  if (mainHand === com) {
    result = '結果はあいこでした。';
  } else if ((com === GU && mainHand === 3) || (com === CHOKI && mainHand === 1) || (com === PA && mainHand === 2)) {
    result = '勝ちました。';
  } else {
    result = '負けました。';
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


      {result}


    </div>
  )
}

export default Page2
