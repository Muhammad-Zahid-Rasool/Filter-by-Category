import React, { useState } from 'react'
import category from './category.json'

const Products = () => {
  const[data,setData]=useState(category);
  const filterresult=(catItems)=>{
    const result=category.filter((curData)=>{

      return curData.title===catItems;
    } );
    setData(result);

  }



  return (
    <>
    <div> <h1 className='text-center text-info'>Let's Buy the product</h1></div>
    <button onClick={()=>filterresult('Man')}  >Man</button>
    <button onClick={()=>filterresult('Women')} >Women</button>
    <button onClick={()=>filterresult('Children')} >Children</button>
    <button onClick={()=>filterresult('Black')} >Black</button>
    <button onClick={()=>filterresult('White')} >White</button>
    <button onClick={()=>setData(category)} >All Products</button>
    
    <div>
      <ul>
      <li>
          {data.map((values)=>{
            const{id,title,price,image}=values;
            return (
<>
              <p>id:{id} </p>
              <p>Title:{title} </p>

              <p>price:{price} </p>
              <img src={image}/>
              
              
              </>
            
            )
            
          })}
      </li>
      </ul>
    </div>
    </>
   
  )
}

export default Products