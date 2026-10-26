const express = require('express');
const cors = require('cors');
const app = express();

// Middlewares esenciales para permitir conexiones y leer JSON
app.use(cors());
app.use(express.json());


//  GET /inicio

app.get('/inicio', (req, res) => {
  res.json({ mensaje: '¡Conexión exitosa entre Express y React!' });
});


//  GET /informacion

app.get('/informacion', (req, res) => {
  res.json({
    titulo: 'Prueba conexion',
    descripcion: 'Conexion de frontend y Backend con API',
    autor: 'Esneider Aprendiz sena',
    version: '1.0'
  });
});


// POST /solicitudes

app.post('/solicitudes', (req, res) => {
  const { nombre, apellido, correo } = req.body;

  // Validar si faltan campos
  if (!nombre || !apellido || !correo) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
  }

  // Validar si el correo tiene un formato básico válido
  if (!correo.includes('@')) {
    return res.status(400).json({ error: 'El correo electrónico no es válido.' });
  }

  // Respuesta exitosa si todo está correcto
  res.json({
    mensaje: `¡Hola ${nombre} ${apellido}, tu solicitud fue recibida con éxito!`,
    datosRegistrados: { nombre, apellido, correo }
  });
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor backend ejecutándose correctamente en el puerto 3000');
});