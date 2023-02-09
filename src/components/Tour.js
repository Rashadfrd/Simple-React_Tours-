import { useState } from 'react'
import Card from './Card'
import classes from './Tours.module.css'

const Tour = ({id,country,desc,price,image,filter}) => {
  const[descLength,setDescLength] = useState(false);
  return (
      <Card>
        <img className={classes.cardImgItem} src={image} alt={country} />
        <div className={classes.cardInfo}>
            <p>
              {descLength ? desc : `${desc.substring(0,200)}`}  
              <span style={{color:'#0081C9',cursor:'pointer',margin:'10px'}} onClick={()=>{setDescLength(!descLength)}}>
                {descLength ? 'show less' : 'show more'}
              </span>
            </p>
            <span className={classes.price}>{price.toFixed(2)} $</span>
        </div>
        <div className={classes.btnDiv}>
        <button className={classes.btn} type='button' onClick={(e)=>{filter(id)}}>Not Interested</button>
        </div>
      </Card>
  )
}

export default Tour
