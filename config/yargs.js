
const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla multiplicar",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    demandOption: true,
    describe: "Es el multiplicador de la tabla",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "muestra la tabla en consola",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  })
  .check((argv, options) => {
    if (isNaN(argv.h)) {
      throw "El multiplicador tiene que ser un numero";
    }
    return true;
  }).argv;

module.exports = argv;
