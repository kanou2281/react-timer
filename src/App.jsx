import './App.css'
import {useEffect,useState} from'react'

function App(){
  const [seconds,setSeconds]=useState(0)
  const [isRunning,setIsRunning]=useState(false)
useEffect(()=>{
  if(!isRunning)return

  const timerId=setTimeout(()=>{
    if(seconds<=1){
      setSeconds(0)
      setIsRunning(false)
    }else{
      setSeconds(seconds-1)
    }
  },1000)

  return () => clearTimeout(timerId)
},[isRunning,seconds])

  const minutes=Math.floor(seconds/60)
  const remainingSeconds=seconds%60
  const formattedMinutes=String(minutes).padStart(2,'0')
  const formattedSeconds=String(remainingSeconds).padStart(2,'0')
  const resetTimer=()=>{
    setSeconds(0)
    setIsRunning(false)
  }
  return(
    <main className="timer">
    <h1 id='name'>カウントダウンタイマー</h1>

    <p className="time">{formattedMinutes}:{formattedSeconds}</p>
    <p className="status">{isRunning ? '動作中' : '停止中'}</p>



   <button onClick={()=>setIsRunning(true)}>
      開始
   </button>
   <button onClick={()=>setIsRunning(false)}>
    停止
   </button>
    <button onClick={resetTimer}>
      リセット
    </button>
    <button onClick={()=>setSeconds(seconds+30)}>
      30秒
    </button>
    <button onClick={() => setSeconds(seconds+60)}>
      +1分
    </button>
    <button onClick={() => setSeconds(seconds+600)}>
     10分
    </button>
    </main>
  )
}

export default App