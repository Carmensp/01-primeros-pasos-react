import React from 'react'

export const EventosComponente = () => {

    const hasDadoClick = (e, nombre) => {
        alert("Has dado click al botón!! " + nombre)
    }
    const hasDadoDobleClick = (e, nombre) => {
        alert("Has dado doble click al botón!! " + nombre)
    }
    const hasEntrado = (e) => {
        console.log("Has dentrado a la caja!!")
    }
    const hasSalido = (e) => {
        console.log("Has salido de la caja!!")
    }
    const estasDentro = (e) => {
        console.log("Estás dentro del input. Mete tu nombre")
    }
    const estasFuera = (e) => {
        console.log("Estás fuera del input. Adiós")
    }

  return (
    <div>
        <h1>Eventos en React</h1>
        <p>
          <button onClick={e => hasDadoClick(e, "Carmen")}>Dame click!</button>
        </p>
        <p>
          <button onDoubleClick={e => hasDadoDobleClick(e, "Carmen")}>Dame doble click!</button>
        </p>
        <div id='caja' onMouseEnter={hasEntrado} onMouseLeave={hasSalido}>
          Pasa por encima
        </div>
        <p>
          <input type="text" onFocus={estasDentro} onBlur={estasFuera} placeholder='Introduce tu nombre'/>
        </p>
    </div>
  )
}
