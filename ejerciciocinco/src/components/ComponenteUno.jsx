import React from 'react'


let persona = {
    username : "Martin",
    telephone: "986521475"
}

function ComponenteUno(prop) {
  return (
    <div>
        <h1>Nombre: {persona.username}</h1>
        <h1>Teléfono: {persona.telephone}</h1>
        {console.log(prop)}
    </div>

  )
}




export default ComponenteUno
