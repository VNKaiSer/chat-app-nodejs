import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AuthPage from './components/AuthPage'

function App() {
  const [user, setUser] = useState(undefined)
  return (
    <>
      <AuthPage onAuth={(user) => { setUser(user) }} />
    </>
  )
}

export default App
