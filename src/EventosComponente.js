import React from 'react'

export const EventosComponente = () => {

    const hasDadoClick = (e, nombre) => {
        alert("Has dado click al botón!! " + nombre)
    }

  return (
    <div>
        <h1>Eventos en React</h1>
        <button onClick={e => hasDadoClick(e, "Carmen")}>Dame click!</button>
    </div>
  )
}
