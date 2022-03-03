const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, mult = 10, listar = false) => {
  try {
    let salida = "";
    let consola = '';

    for (let index = 1; index <= mult; index++) {
      salida += `${base} x ${index} = ${base * index} \n`;
      consola += `${base} x ${index} = ${base * index} \n`.rainbow;
    }
    if (listar) {
      console.log("  =============".green);
      console.log(`|| TABLA DEL ${base} ||`.green);
      console.log("  =============".green);
      console.log(salida);
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt creado`.rainbow;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
