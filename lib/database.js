//Import de la library de connexion à la base
import Database from "mysql2-async";

// Configuration de la connexion
const db = new Database({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  skiptzfix: true,
  dateStrings: true,
});

// Rend accessible la base de donnees au reste de notre application
export default db