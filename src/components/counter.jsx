import { useState } from "react"


export const Counter = () => {
    const [counter, u_counter] = useState(0.00);
    const [interval, toggleInterval] = useState(0);

    const start = ()=> {
                toggleInterval(setInterval(function() {
                    //console.log('here')
                u_counter((counter) => parseFloat((counter + 0.01).toFixed(2)));
                  },10));
                  console.log(interval,'time is')
            
        }

        const pause = ()=>{
            console.log(interval,'time')
            clearInterval(interval);
           
        }
        const reset = ()=>{
            clearInterval(current);
           
        }
       const current = counter;
        //console.log(counter,'count12')
        return(<div>
            <h1 id="oyee">Stopwatch : {current}</h1>
            <button onClick={start}>Start</button>&nbsp;
            <button onClick={pause}>Pause</button>&nbsp;
            <button onClick={reset}>Reset</button>&nbsp;
            
         </div>)
      }
    
    // Debug kese karu
    // Terminal ajeeb hota hai
    //useState()
