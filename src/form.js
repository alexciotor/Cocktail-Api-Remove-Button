import {useState} from 'react'
const Form = ()=>{
    const [value,SetValue]= useState(0)
    const change=()=>{
      SetValue(0)
    }
return (
    <section>
    <article style={{width:'80%', margin:'auto', textAlign:'center', marginTop:'10vh'}} >
    <h1>Regular counter</h1>
    <p style={{marginTop:'2vh'}}>{value}</p>
    <div className="buttons">
    <button className="btn" onClick={()=>{
        SetValue(value-1)
    }}>Decrease</button>
    <button className="btn" onClick={()=>{
        change()
    }}>Reset</button>
    <button className="btn" onClick={()=>{
        SetValue((prevValue)=>{return prevValue + 1})
    }} >Increase</button>
    </div>
    </article>
    </section>
)
}


export default Form