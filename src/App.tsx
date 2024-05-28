import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Login from './components/Login/Login'
import ReactBootrap from './components/ReactBootrap'
import Admin from './components/Admin/Admin'

export default function App() {
  return (
    <div>App
      <Header></Header>
      <Main></Main>
      <Login></Login>
      <ReactBootrap></ReactBootrap>
      <Admin></Admin>
    </div>
  )
}
