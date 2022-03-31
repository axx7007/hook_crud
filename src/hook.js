import React, { useEffect, useState } from 'react'

export const Hook = () => {
    const [data, setData] = useState([])

    // useEffect(() => {
    //   fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(res => setData(res))
    // }, [])
      useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(res=>setData(res))
      }, [])

console.log(data)

  return (
    <div>
      Hook
      {
        data.map((e) => {
          return(
            <div key={e.id}>{e.id} {e.name}</div>
          )
        })
      }
    </div>
  )
}
