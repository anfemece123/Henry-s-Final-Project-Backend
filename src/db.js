//postgres db
require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { PGUSER, PGPASSWORD, PGHOST, PGPORT, PGDATABASE } = process.env;

const sequelize = new Sequelize(
  `postgresql://postgres:Dkgg8MJnMdBtdJP9Crxj@containers-us-west-107.railway.app:6276/railway`,

  // postgres:Dkgg8MJnMdBtdJP9Crxj@containers-us-west-107.railway.app:6276/railway

  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
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

const { Order, Product, User } = sequelize.models;

// Aca vendrian las relaciones

User.belongsToMany(Product, { through: "Product_User" });
Product.belongsToMany(User, { through: "Product_User" });

User.hasMany(Order);
Order.belongsTo(User);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product} = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
