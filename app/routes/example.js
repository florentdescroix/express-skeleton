// Import de l'utilitaire pour faire des table de routage
import { Router } from "express";

// Import de la fonction du controlleur qui envoie les tables au client
import * as exampleController from "../controllers/example.js";

// Création d'une table de routage
const router = Router();

// Ajout d'une ligne dans notre table de routage
// Avec le chemin / c'est la fonction getAllData qui sera executée
router.get("/", exampleController.getAllData);

// Rend accessible notre table de routage dans le reste de notre application
export default router;