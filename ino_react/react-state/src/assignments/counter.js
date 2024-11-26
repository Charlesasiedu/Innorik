import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(count + 1);
    }
    const decrement = ()=>{
        setCount(count - 1);
    }
    const reset = ()=>{
        setCount(0);
    }

  return (
    <div className="py-9">
        <div className="font-bold border-b-2 hover:text-blue-600 justify-items-center">
            <h1>Counter App</h1>
        </div>
        <div className="flex justify-center ">
            <div className="mt-5">
              <button className="text-4xl items-center border-2 py-2 px-4 bg-green-300" onClick={increment}>+</button>  
            </div>
            
          <div className="justify-items-center py-5">
            <h1 className="border-2 px-4 py-2 text-4xl bg-slate-300">{count}</h1>
          </div>

          <div className="mt-5">
              <button className="text-4xl items-center border-2 py-2 px-4 bg-red-200" onClick={decrement}>-</button>  
          </div>
        </div>
        <div className="flex justify-center">
            <button className="text-lg items-center border-2 px-4 py-1 bg-pink-200" onClick={reset}>
                    reset
            </button>
        </div>
    </div>
  )
}

export default Counter
