import React, { useEffect, useState } from 'react'

const API = () => {

  const [data, setData] = useState([])

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((result) => setData(result))

  }, [])

  return (
    <>
      <h1>User List</h1>

      {
        data.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.email}</p>
          </div>
        ))
      }
    </>
  )
}

export default API