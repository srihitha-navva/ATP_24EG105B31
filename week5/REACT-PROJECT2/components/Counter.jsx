import { useState } from "react";

function Counter(){
    const[count,setCount]=useState(0) //state , function to modify state
    //state

    //functions to modify the state
    const increment =()=>{
        setCount(count+1);
        // count=count+1;
        // console.log(count)
    };
    const decrement =()=>{
        setCount(count-1)
        // count=count-1;
        // console.log(count)
};
console.log("counter component")
return(
    <div className="text-center m-10">
    <h1 className="text-3xl font-bold mb-4">Counter</h1>
    
    <p className="text-2xl mb-4">{count}</p>
    
    <button 
      onClick={increment} 
      className="bg-blue-500 text-white px-4 py-2 m-2 rounded"
    >
      Increment
    </button>
    
    <button 
      onClick={decrement} 
      className="bg-red-500 text-white px-4 py-2 m-2 rounded"
    >
      Decrement
    </button>
  </div>
)
}

export default Counter