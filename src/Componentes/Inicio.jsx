import React,{useState} from "react";

function Inicio() {
    const [mensaje, setMensaje]= useState('');
   
    const consultarInicio = async () => {
        
        const respuesta = await fetch('http://localhost:3000/inicio');
        const datos = await respuesta.json();

        setMensaje(datos.mensaje);
    };

    return( 
    <div >
      
      <button onClick={consultarInicio}>Consultar Inicio</button>
      {mensaje && <p style={{ color: 'green', marginTop: '10px' }}>Respuesta: {mensaje}</p>}
    </div>
    );
}

export default Inicio;
