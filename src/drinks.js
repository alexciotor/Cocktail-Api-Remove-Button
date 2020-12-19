const Drinks = ({drinks,setDrinks})=>{
     const remove=(id)=>{
        let newDrink = drinks.filter(((item)=> {
           const{idDrink:itemm}=item
           if(itemm !==id){
               return itemm
           }
   
        
        }))
 
      setDrinks(newDrink)     
    
   console.log(id);
     }
    return (
drinks.map(drink=>{
 const {idDrink:id, strDrink:name, strCategory:type, strInstructions:inst,strDrinkThumb:image} = drink
return (
<article className='article' key={id} >
<img className='image' src={image} alt={name}/>
<h4>{name}</h4>
<h4>{type}</h4>
<p>{inst}</p>
<button onClick={()=>{
    remove(id)
}} >remove item</button>
</article>

)

})
    )

}


export default Drinks