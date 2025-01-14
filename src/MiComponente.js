//Importar módulos de react / dependencias
import React from "react";

//Función del componente
const MiComponente = () => {

    let nombre = "Carmen";
    let web = "www.carmenweb.com";

    let usuario = {
        nombre: "Lizzie",
        apellido: "Young",
        web: "www.LizzieYoungWeb.com"
    };

    return (

        <div className="mi-componente">
        <h2>Componente creado</h2>
        <h3>Datos del usuario:</h3>
        <ul>
            <li>Nombre: <strong>{usuario.nombre}</strong></li>
            <li>Apellido: <strong>{usuario.apellido}</strong></li>
            <li>Web: <strong>{usuario.web}</strong></li>
        </ul>
        <p>Este es mi primer componente</p>
        <ul>
            <li>React</li>
            <li>Angular</li>
            <li>Vue</li>
        </ul>
        </div>
        
    )
};

//Export
export default MiComponente;