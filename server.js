const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise'); // Usamos la versión promise-based
const bcrypt = require('bcrypt');
const app = express();

// Configuración de la base de datos (deberías usar variables de entorno en producción)
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'SmartTomato',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

// Creamos un pool de conexiones en lugar de una conexión única
const pool = mysql.createPool(dbConfig);

// Middleware
app.use(express.json());
app.use(cors());

// Ruta de registro
app.post('/registrar', async (req, res) => {
    const { nombre, apellido, correo, contrasenya, direccion, telefono, genero } = req.body;

    try {
        // Validación de campos obligatorios
        if (!nombre || !apellido || !correo || !contrasenya || !direccion || !telefono || !genero) {
            return res.status(400).json({ 
                success: false,
                message: 'Todos los campos son obligatorios' 
            });
        }

        // Validación de formato de email
        if (!/\S+@\S+\.\S+/.test(correo)) {
            return res.status(400).json({
                success: false,
                message: 'El formato del correo electrónico no es válido'
            });
        }

        // Validación de longitud de teléfono
        if (telefono.length < 10) {
            return res.status(400).json({
                success: false,
                message: 'El teléfono debe tener al menos 10 dígitos'
            });
        }

        // Verificar si el correo ya existe
        const [existingUsers] = await pool.execute(
            'SELECT id FROM usuarios WHERE correo = ?',
            [correo]
        );

        if (existingUsers.length > 0) {
            return res.status(400).json({
                success: false,
                message: 'El correo electrónico ya está registrado'
            });
        }

        // Hash de la contraseña
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(contrasenya, saltRounds);

        // Insertar nuevo usuario
        const [result] = await pool.execute(
            `INSERT INTO usuarios 
            (nombre, apellido, correo, contrasenya, direccion, telefono, genero)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [nombre, apellido, correo, hashedPassword, direccion, telefono, genero]
        );

        res.status(201).json({
            success: true,
            message: 'Usuario registrado correctamente',
            userId: result.insertId
        });

    } catch (error) {
        console.error('Error en el registro:', error);
        res.status(500).json({
            success: false,
            message: 'Error al procesar el registro',
            error: error.message
        });
    }
});

// Ruta para obtener usuarios (solo para desarrollo)
app.get('/usuarios', async (req, res) => {
    try {
        const [users] = await pool.query('SELECT id, nombre, apellido, correo FROM usuarios');
        res.json({
            success: true,
            data: users
        });
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({
            success: false,
            message: 'Error al obtener usuarios'
        });
    }
});

// Iniciar servidor
const PORT = 8081;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor corriendo en http://192.168.1.87:${PORT}`);
});

// Manejo de cierre de la aplicación
process.on('SIGINT', async () => {
    await pool.end();
    process.exit();
});