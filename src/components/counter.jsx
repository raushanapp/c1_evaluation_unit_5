import { useEffect, useState } from "react"

export const Counter = () =>{
    const [count, setCounter] = useState(0);
    useEffect(() =>{
        let id = setInterval(()=>{
            // console.log("count")
          setCounter((prev)=>{

            if (prev===50){

                clearInterval(id);
                return "End Time"
            }
              return prev +1
            //   console.log(prev)
          })
        },1000)
        return ()=>{
            clearInterval(id)
        }
    },[])

    return (
        <div>
           <h3>Second : {count}</h3>
        </div>
    )
}