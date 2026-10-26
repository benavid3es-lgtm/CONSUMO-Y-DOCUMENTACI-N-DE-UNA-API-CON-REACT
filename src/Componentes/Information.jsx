import React, { useState } from "react";

function Informacion(){
    const [info, setInfo] = useState(null);
    const consultarInformacion = async () => {
        const respuesta = await fetch('http://localhost:3000/informacion');
        const datos = await respuesta.json();
        setInfo(datos);
    };

    return (
        <div>
            <h3>Componente informacion</h3>
            <button onClick={consultarInformacion}>Mostara informacion</button>
            {info && (
                <div>
                    <p><strong>Titulo:</strong>{info.titulo}</p>
                    <p><strong>Descripcion:</strong>{info.descripcion}</p>
                    <p><strong>Autor:</strong>{info.autor}</p>
                    <p><strong>Version:</strong>{info.version}</p>
                </div>
            )}
        </div>
       
    );
}

export default Informacion;
