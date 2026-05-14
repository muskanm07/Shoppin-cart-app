import { useState } from "react"

export default function ShoppingCart(){
  
    const [input,setInput]=useState("")

    // items is empty array setItems will update it
    const[items,setItems]=useState([])
    const[carts,setCarts]=useState([])


    // addItems function runs when clicked
    const addItems=()=>{
        if(!input.trim()){
            return;
        }
        // takes current items array
        //setItems save new array
       setItems(item=>[...item,input])   //spread all old items+add new input   
       setInput("")
    }
    // addToCart function runs when clicked
  
    const addToCart=(product)=>{
      //takes prevCArt array and spread all old prevCart + add product
    setCarts(prevCart=>[...prevCart,product])
    }
   
    //deleteCart function runs when clicked
    const deleteCart=(itemToDelete)=>{
      //filter carts array take index and compare to item index and if equal then delete cart
       const deleteToCart=carts.filter((_,index)=>index!==itemToDelete)
       setCarts(deleteToCart)
    }

//react re renders and shows new items
    return(
       <>
       <button>Carts: {carts.length}</button><br />
       <input  onChange={(e)=>setInput(e.target.value)}  type="text" placeholder="add items" value={input}/>
       <button onClick={addItems}>Add</button>
         {items.map((item,index)=>(
            <div className="productItems" key={index}>
             <h3>{item}</h3>
             <button className="btn" onClick={()=>addToCart(item)}>Add To Cart</button>
           </div>
         ))}
           <h3>Your Cart</h3> 
         {carts.map((cart,index)=>(
           <div className="carts" key={index}>
            <p>{cart}</p>
          <button  onClick={()=>deleteCart(index)}> remove from cart</button>
          </div>
         ))} 
      
       
       </>
    )
}