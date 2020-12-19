import { useState, useEffect } from "react";
 import Drinks from './drinks'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a' 



function App() {
const [value,setValue]=useState('hello')
 const [drinks,setDrinks]= useState([])

const displayData= async()=>{
const data = await fetch(url)
const response = await data.json()
 
setDrinks(response.drinks)
 setValue(response.drinks)

}

useEffect(()=>{
  displayData()
},[])
 

  return (
    <section className="main-section">
<div className="content">
    <Drinks drinks = {drinks} setDrinks={setDrinks} />
  
    </div>
     <button onClick={()=>{
      setDrinks([])
    }} >Vanish</button>
    <button onClick={()=>{
      setDrinks(value)
    }} >btn</button>
    </section>
  )
}

export default App;
