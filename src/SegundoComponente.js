import React from 'react'

export const SegundoComponente = () => {
    
    const libros = ["Keeping 13", "Saving 6", "Redeeming 6", "Taiming 7"];
    //const libros = [];

  return (
    <div className='segundo-componente'>
        <h1>Listado de libros</h1>
        {libros.length >= 1 ? (
                <ol>
                {
                libros.map((libro, indice) => {
                    return <li key={indice}>{libro}</li>
                })
                }
                </ol>
            ):(
                <p>No hay libros en este momento</p>
            )
        }
        
    </div>
  )
}
