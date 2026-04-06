import * as exampleModel from '../models/example.js'

export function getAllData(req, res) {
    const data = exampleModel.getAll()
    res.json(data)
}

export function getOneData(req, res) {
    const id = req.params.id
    const data = exampleModel.get(id)
    res.json(data)
}