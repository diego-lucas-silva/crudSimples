const express = require('express')

const PORT = 3000

const HOST = '0.0.0.0'

const app = express()

/* app.get('/primeira-rota', (req, res) => {
  return res.json({
    message: 'Acessou a primeira rota com nodemon'
  })
}) */

const products = []



app.listen(PORT, HOST, console.log('Servidor está rodando na porta 3000'))
