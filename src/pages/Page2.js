import React, { useState, useEffect } from 'react'

/**
 * じゃんけん 
 */
const Page2 = () => {
  // 自分の手
  const [hand, setHand] = useState("");
  // 相手の手
  const [comHandName, setComHandName] = useState("")
  // 勝敗
  const [result, setResult] = useState("")
  // 何試合目か
  const [changeCheck, setChangeCheck] = useState(0)
  
  // じゃんけんの試合毎に実行
  useEffect(() => {
    judge()
    // eslint-disable-next-line
  }, [changeCheck])
  
  // onClickで実行される関数
  const janken = (te) => {
    decideMyHand(te)
    decideCpuHand()
    setChangeCheck(prev => prev + 1)
  }

  // 自分の手を呼び出す
  const decideMyHand = (te) => {
    if (te === "ぐー") {
      setHand("ぐー")
    } else if(te === "ちょき") {
      setHand("ちょき")
    } else if (te === "ぱー") {
      setHand("ぱー")
    } else {
      alert("error")
    }
  }

  // cpuの手を呼び出す
  const decideCpuHand = () => {
    const com = Math.floor(Math.random() * 3) + 1;
    switch (com) {
      case 1:
        setComHandName("ぐー");
        break;
      case 2:
        setComHandName("ちょき");
        break;
      case 3:
        setComHandName("ぱー");
        break;
      default:
    }
  }

  // ジャンケンの勝敗を決める
  const judge = () => {
    // 自分の手が確定していなかったらreturn
    if (hand === "") return
    // 自分の手と相手の手を比較し、勝敗を判定
    if (hand === comHandName) {
      setResult('結果はあいこでした。');
    } else if(hand === "ぐー" && comHandName === "ちょき"){
      setResult('あなたの勝ちです。');
    } else if (hand === "ちょき" && comHandName === "ぱー") {
      setResult('あなたの勝ちです。');
    } else if (hand === "ぱー" && comHandName === "ぐー") {
      setResult('あなたの勝ちです。');
    }else if (hand === "ぐー" && comHandName === "ぱー") {
      setResult('あなたの負けです。');
    } else if (hand === "ちょき" && comHandName === "ぐー") {
      setResult('あなたの負けです。');
    } else if (hand === "ぱー" && comHandName === "ちょき") {
      setResult('あなたの負けです。');
    }else {
      setResult('...');
    }
  };

  return (
    <div>
      <h1>
        level6,level7
      </h1>
      <button onClick={() => janken("ぐー")}>ぐー</button>
      <button onClick={() => janken("ちょき")}>ちょき</button>
      <button onClick={() => janken("ぱー")}>ぱー</button>
      <div>あなたの手:{hand}</div>
      <div>CPUの手：{comHandName}</div>
      <div>結果は {result}</div>
    </div>
  )
}

export default Page2