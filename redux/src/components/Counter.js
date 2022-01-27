import React,{useState} from 'react';

export default function Counter() {

    const[data,setData]=useState(0);

      return <div>
          <h1>{data}</h1>
        <button onClick={()=>{
            setData(data+1)
        }}>Increment</button>
        <button onClick={()=>{
            setData(data-1)
        }}>Decrement</button>
    </div>
}
