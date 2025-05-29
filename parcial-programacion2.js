
const persona = {
  id: 1,
  nombre: "Ana",
  edad: 28,
  ciudad: "Madrid",
  profesion: "Desarrolladora"
};

const {nombre: nombreCompleto, profesion: cargo} = persona
console.log(nombreCompleto, cargo);

const {pais= 'japón', id} = persona
console.log(pais, id);
console.log(persona);


const configuracion = { 
    tema: "oscuro"
};
const