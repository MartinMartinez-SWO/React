import React from 'react'

let persona = {
  username : "Martin",
  telephone: "986521475"
}

function ComponenteDos(prop) {
  return (
    <div>
      <h1>Segunda persona: {persona.username}</h1>
      <h1>Segunda persona telf: {persona.telephone}</h1>
      {console.log(prop)}
    </div>
  )
}

export default ComponenteDos
