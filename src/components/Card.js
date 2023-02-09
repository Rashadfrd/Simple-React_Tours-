import React from 'react'
import classes from './Card.module.css'

function Card({children}) {
  return (
    <div className='col-lg-4 col-md-6 col-12' style={{padding:'10px'}}>
      <div className={classes.card}>
        {children}
      </div>
    </div>
  )
}

export default Card
