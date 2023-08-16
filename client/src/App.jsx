import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AuthPage from './components/AuthPage'
import ChatsPage from './components/ChatPage'

function App() {
  const [user, setUser] = useState(undefined)

  if (!user) {
    return <AuthPage onAuth={(user) => { setUser(user) }} />
  }
  return <ChatsPage user={user} />

}

export default App
