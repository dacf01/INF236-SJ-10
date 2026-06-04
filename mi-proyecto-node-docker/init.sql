--- HU1
CREATE TABLE IF NOT EXISTS Perfiles(
    id serial PRIMARY KEY,
    Nombre TEXT NOT NULL,
    Intolerancias TEXT[]  --Registro intolerancias
);

---HU2
CREATE TABLE IF NOT EXISTS Consumos_diarios(
    id SERIAL PRIMARY KEY,
    Alimento TEXT NOT NULL,
    Calorias INT NOT NULL,
    Fecha DATE DEFAULT CURRENT_DATE
);

---HU8
CREATE TABLE IF NOT EXISTS Recetas(
    id SERIAL PRIMARY KEY,
    Titulo TEXT NOT NULL,
    Validacion BOOLEAN DEFAULT FALSE,
    Motivo_Rechazo TEXT
);

--HU07
CREATE TABLE IF NOT EXISTS Post(
    id SERIAL PRIMARY KEY,
    Titulo VARCHAR(300),
    Descripcion TEXT,
    Informacion_Nutricional TEXT,
    Estado VARCHAR(100),
    Imagen VARCHAR(300)
)
