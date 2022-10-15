import express from 'express'

//En el archivo de rutas crear una variable encargada de definir todos lo endpoints de mi API
//Por cada de servicio que ofrece mi API debo tener un endpoint o ruta

export let rutas=express.Router()

//Defino las rutas para cada servicio de mi API:

rutas.post('/api/hotel/habitaciones',function (req, res) {
    res.send('estamos registrando una habitaicon')
  })

rutas.get('/api/hotel/habitaciones',function (req, res) {
    res.send('estamos buscando habitaciones')
  })

rutas.get('/api/hotel/habitaciones/:id',function (req, res) {
    res.send('estamos buscando una habitacion por id')
  })

rutas.put('/api/hotel/habitaciones/:id',function (req, res) {
    res.send('estamos editando una habitacion')
  })
