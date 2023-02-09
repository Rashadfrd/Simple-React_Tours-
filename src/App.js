import React from 'react'
import Tours from './components/Tours'
import classes from './App.module.css'

function App() {
  return (
    <main className={`${classes.main}`}>
      <div className={classes.title}><h2 style={{margin:'0'}}>Our Tours</h2><hr className={classes.customHr}/></div>
      <Tours />
    </main>
  )
}

export default App
