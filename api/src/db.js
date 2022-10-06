require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;


const sequelize =
  process.env.NODE_ENV === "production"
    ? 
      new Sequelize(process.env.DATABASE_URL, {
        dialect: "postgres",
        protocol: "postgres",
        dialectOptions: {
          ssl: {
            rejectUnauthorized: false,
          },
        },
      })
    : 
      new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
        {
          logging: false,
          native: false,
        }
      );
const basename = path.basename(__filename);

const modelDefiners = [];


fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Jobs, Nurse_hired_jobs,Nurses,Facilities, Clinician_work_history  } = sequelize.models;

Jobs.belongsToMany(Nurses, { through: Nurse_hired_jobs });
Nurses.belongsToMany(Jobs, { through: Nurse_hired_jobs });

Clinician_work_history.hasMany(Nurses);
Nurses.belongsTo(Clinician_work_history);

Clinician_work_history.hasMany(Facilities);
Facilities.belongsTo(Clinician_work_history);

// Aca vendrian las relaciones
// Product.hasMany(Reviews);


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
