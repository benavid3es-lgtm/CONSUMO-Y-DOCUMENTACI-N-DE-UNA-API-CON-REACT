import React, { useState } from 'react';

function Solicitudes() {
  // Estado para capturar valores del formulario
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  
  // Guarda la respuesta devuelta por el servidor
  const [mensaje, setMensaje] = useState('');

  const enviarSolicitud = async (e) => {
    e.preventDefault(); 
    
    const respuesta = await fetch('http://localhost:3000/solicitudes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre, apellido, correo }),
    });

    // CONVERSIÓN A FORMATO JSON
    const datos = await respuesta.json();

    if (!respuesta.ok) {
      setMensaje(datos.error || "Ocurrió un error al cargar la solicitud");
    } else {
      setMensaje(datos.mensaje);

      // Limpieza de campos
      setNombre('');
      setApellido('');
      setCorreo('');
    }
  };

  return (
    <div>
      <h3>Componente Solicitudes</h3>
      <form onSubmit={enviarSolicitud} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <div>
          <label>Nombre: </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Apellido: </label>
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Correo: </label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>

        <button type="submit">Enviar Solicitud</button>
      </form>

     
      {mensaje && (
        <p style={{ marginTop: '10px', fontWeight: 'bold', color: mensaje.toLowerCase().includes('error') ? 'red' : 'green' }}>
          {mensaje}
        </p>
      )}
    </div>
  );
}

export default Solicitudes;