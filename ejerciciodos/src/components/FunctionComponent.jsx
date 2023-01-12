import React from "react";

function parametro(parametro){
    return (parametro)
}

function FunctionComponent(){
    return (
       <h1>Este es el parametro: {parametro("parametro")}</h1>
    )
}

export default FunctionComponent;