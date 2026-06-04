const express = require('express');
const router = express.Router();
const Controlador = require('../Controladores/NutricionCon');

router.post('/Perfil', Controlador.Crear_Perfil);
router.get('/Perfil', Controlador.Obtener_Perfiles);
router.get('/Consumo/Hoy', Controlador.Obtener_Calorias_Hoy);
router.get('/Consumos', Controlador.Obtener_Consumos);
router.patch('/Recetas/:id/Validacion', Controlador.Validar_Receta);
router.get('/Recetas', Controlador.Obtener_Recetas);
router.post('/Publicaciones', Controlador.Crear_Post);
router.get('/Publicaciones', Controlador.Obtener_Posts);
router.get('/Publicaciones', Controlador.Obtener_Posts);
module.exports = router;