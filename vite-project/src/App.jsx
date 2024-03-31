import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import { Header } from './components/header/Header'
import { MainBlock } from './components/main/Main'
import { initialTasks } from '../../data'



function App() {
  

const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }
  ,[])
  

const [tasksList, setTasksList] = useState(initialTasks)


  return (
    <>
       <Header tasksList={tasksList} setTasksList={setTasksList}/>
      <MainBlock tasksList={tasksList} isLoading={isLoading}/>
    </>
  )
}

export default App
