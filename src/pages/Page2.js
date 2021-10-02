import React, { useState, useEffect } from 'react'

const Page2 = () => {

  const [hand, setHand] = useState("");
  const [cpuhand, setCpuhand] = useState("");
  const [count, setCount] = useState(0);
  const [result, setResult] = useState("");


  useEffect(() => {
    console.log('useEffect が呼び出されました。')
  },
    [count]
  );

  const gu = () => {
    setHand("ぐー")
    setCount(count + 1)
    console.log("gu")
    CPUdeside()
    judge()
  };

  const choki = () => {
    setHand("ちょき")
    setCount(count + 1)
    console.log("choki")
    CPUdeside()
    judge()
  };

  const pa = () => {
    setHand("ぱー")
    setCount(count + 1)
    console.log("pa")
    CPUdeside()
    judge()
  };


  const CPUdeside = () => {
    const com = Math.floor(Math.random() * 3) + 1;
    console.log(com)

    // コンピュータの手の名前
    switch (com) {
      case 1:
        setCpuhand("ぐー");
        console.log("gu(cp)")
        break;
      case 2:
        setCpuhand("ちょき");
        console.log("choki(cp)")
        break;
      case 3:
        setCpuhand("ぱー");
        console.log("pa(cp)")
        break;
      default:
    }
  }

  const judge = () => {

    if (hand === cpuhand) {
      setResult("あいこ");
    } else if ((cpuhand === "ぐー" && hand === "ぱー") || (cpuhand === "ちょき" && hand === "ぐー") || (cpuhand === "ぱー" && hand === "ちょき")) {
      setResult("勝ちました");
    } else if ((cpuhand === "ぐー" && hand === "ちょき") || (cpuhand === "ちょき" && hand === "ぱー") || (cpuhand === "ぱー" && hand === "ぐー")) {
      setResult("負けました");
    } else {
      setResult('...')
    }
    console.log(cpuhand)
    console.log(hand)

  }




  return (
    <div>
      <h1>level6,level7</h1>

      <button onClick={gu}>ぐー</button>
      <button onClick={choki}>ちょき</button>
      <button onClick={pa}>ぱー</button>
      <div>あなたの手:{hand}</div>
      <div>CPUの手：{cpuhand}</div>
      <div>結果は {result}</div>

    </div>
  )
}

export default Page2