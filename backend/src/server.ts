import express from 'express'

import './database/connection'

const app = express()

app.use(express.json())

app.post('/orphanages', (req, res) => {
    
})

app.listen(3333)