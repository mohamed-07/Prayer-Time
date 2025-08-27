import { useState } from 'react'
import './App.css'
import MainContent from './component/mainContent'
import { Container } from '@mui/material'

export default function App() {

  return (
    <>
    <div style={{display:'flex',justifyContent:'center', width:'100vw'}}>
      <Container maxWidth="xl">
      <MainContent/>
      </Container>
    </div>
    </>
  )
}


