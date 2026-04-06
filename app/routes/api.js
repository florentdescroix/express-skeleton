// Import de l'utilitaire pour faire des table de routage
import { Router } from "express";

// Import une router d'example
import exampleRouter from './example.js'

// Création d'une table de routage
const router = Router();

// Utilisation du router d'exemple sur la route '/example'
router.use('/example', exampleRouter)

// Rend accessible notre table de routage dans le reste de notre application
export default router;