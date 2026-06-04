const pool = require('../db');

//HU1
const Crear_Perfil = async (req,res) => {
    const {Nombre, Intolerancias} = req.body;
    await pool.query('INSERT INTO Perfiles (Nombre, Intolerancias) VALUES ($1,$2)', [Nombre,Intolerancias]);
    res.json({status:"Perfil Guardado"});
};

const Obtener_Perfiles = async(req,res) => {

    const result = await pool.query(
        'SELECT * FROM Perfiles'
    );

    res.json(result.rows);
};

//HU2
const Obtener_Calorias_Hoy = async(req,res) => {
    const result = await pool.query('SELECT SUM(Calorias) as total FROM Consumos_diarios WHERE fecha = CURRENT_DATE');
    res.json({ total: result.rows[0].total || 0})
};

const Obtener_Consumos = async(req,res) => {

    const result = await pool.query(
        'SELECT * FROM Consumos_diarios'
    );

    res.json(result.rows);
};

//HU3 
const Validar_Receta = async(req,res) => {
    const {id} = req.params;
    const {estado} = req.body;
    await pool.query('UPDATE Recetas SET Validacion = $1 WHERE id = $2', [estado,id]);
    res.json({status: "Receta Actualizada"})
};

const Obtener_Recetas = async(req,res) => {

    const result = await pool.query(
        'SELECT * FROM Recetas'
    );

    res.json(result.rows);
};


//HU07
const Crear_Post = async(req,res) => {
    const{Titulo, Descripcion, Informacion_Nutricional, Imagen} = req.body;
    const Estado = 'Pendiente';  //Se refiere cuando es validado
    await pool.query(
        'INSERT INTO Post (Titulo, Descripcion, Informacion_Nutricional, Estado, Imagen) Values($1,$2,$3,$4,$5)', [Titulo, Descripcion, Informacion_Nutricional, Estado, Imagen]
    );
    res.json({ status: "Publicacion enviada al nutricionista para su revisión"});
}

const Obtener_Posts = async(req,res) => {

    const result = await pool.query('SELECT * FROM Post');

    res.json(result.rows);
};
module.exports = {Crear_Perfil, Obtener_Perfiles, Obtener_Calorias_Hoy, Obtener_Consumos, Validar_Receta, Obtener_Recetas, Crear_Post, Obtener_Posts};