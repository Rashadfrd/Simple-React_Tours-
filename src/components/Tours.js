import React, { useEffect, useState } from 'react'
import Tour from './Tour'
import classes from './Tours.module.css'

const Tours = () => {
      
  const[tours,setTours] = useState([])
  const[loading,setLoading] = useState(true);
  const filterArr = (id)=>{
    setTours(tours.filter(x => x.id!==id))
  }
    const fetchTours = async() => {
        setLoading(true);
        try{
          const response = await fetch('https://simple-toursapp-default-rtdb.firebaseio.com/Tours.json');
          const responseData = await response.json();
          let loadedData = [];
          for(const key in responseData){
              loadedData.push({
                  id:key,
                  country:responseData[key].country,
                  desc:responseData[key].desc,
                  price:responseData[key].price,
                  image:responseData[key].image
              })
          }
          setTours(loadedData)
          setLoading(false)
        } catch (error){
          setLoading(false)
          console.log(error)
        }
    }
  useEffect(() => {
    fetchTours()
  },[])

  if (loading) {
    return(
        <div style={{textAlign:'center'}}>
            <h3>Loading...</h3>
        </div>
    )
  }
  else if(tours.length === 0){
    return(
      <div style={{textAlign:'center'}}>
      <h3>No Tours Left</h3>
      <button className='btn btn-outline-primary' type='button' onClick={()=>{fetchTours()}}>Reload</button>
  </div>
    )
  }
  else{
      return (
          <div className={classes.tours}>
      {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} filter={filterArr} />
        })}
    </div>
  )
}
}

export default Tours
