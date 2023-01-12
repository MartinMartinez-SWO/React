import React from 'react'


let persona = {
    username : "Martin",
    email: "brais@espabila.com"
}

function ComponenteUno({telephone}) {
  return (
    <div>
        <h1>Nombre: {persona.username}</h1>
        <h1>Email: {persona.email}</h1>
        <h2>Teléfono: {telephone}</h2>
    </div>

  )
}




export default ComponenteUno
