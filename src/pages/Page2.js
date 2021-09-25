import React, { useState, useEffect } from 'react'

const Page2 = () => {






  const [hand, setHand] = useState("");
  const [count, setCount] = useState(0);



  useEffect(() => {
    console.log('useEffect が呼び出されました。')

  },
    [count]
  );




  const gu = () => {
    setHand("ぐー")
    setCount(count + 1)

    console.log("gu")


  };

  const choki = () => {
    setHand("ちょき")
    setCount(count + 1)
    console.log("choki")



  };

  const pa = () => {
    setHand("ぱー")
    setCount(count + 1)
    console.log("pa")

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
    default:
  }





  //const [Cpu, setCpu] = useState("");

  //const random = Math.floor(Math.random() * 3)


  const GU = 1;
  const CHOKI = 2;
  const PA = 3;




  const com = Math.floor(Math.random() * 3) + 1;
  console.log(com)


  // コンピュータの手の名前
  let comHandName = '';
  switch (com) {

    case GU:
      comHandName = 'グー!!';
      break;
    case CHOKI:
      comHandName = 'チョキ!!';
      break;
    case PA:
      comHandName = 'パー!!';
      break;
    default:
  }console.log(comHandName)



  let result = '';
  if (mainHand === com) {
    result = '結果はあいこでした。';
  } else if ((com === GU && mainHand === 3) || (com === CHOKI && mainHand === 1) || (com === PA && mainHand === 2)) {
    result = '勝ちました。';
  } else if ((com === GU && mainHand === 2) || (com === CHOKI && mainHand === 3) || (com === PA && mainHand === 1)) {
    result = '負けました。';
  } else {
    result = '...'
  }












  return (
    <div>
      <h1>level6,level7</h1>

      <button onClick={gu}>ぐー</button>
      <button onClick={choki}>ちょき</button>
      <button onClick={pa}>ぱー</button>
      <div>あなたの手:{hand}</div>
      <div>CPUの手：{comHandName}</div>
      <div>結果は {result}</div>






    </div>
  )
}

export default Page2