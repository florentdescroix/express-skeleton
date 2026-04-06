// Import de la connexion à la base de donnée
import db from '../../lib/database.js'

// base de donnée d'exemple
const data = [
    { id: 1, name: "data 1"},
    { id: 2, name: "data 2"},
    { id: 3, name: "data 3"},
    { id: 4, name: "data 4"},
    { id: 5, name: "data 5"},
]

export function getAll() {
    // Je récupère les données, normalement grace à ma BDD
    return data
}

export function get(id) {
    // Je récupère les données, normalement grace à ma BDD
    return data.find(el => el.id == id)
}