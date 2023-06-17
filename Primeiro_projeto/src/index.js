//Usando a documentação do express

import express from"express"
const app = express()
const port = 3333                                              //troquei a porta na doc. usa 3000.  

app.use(express.json())
app.get('/courses', (req, res) => {
    return res.json(["Curso 1","Curso 2", "Curso 3" ])                   //aqui troquei o send pelo json.
})

app.post('/courses', (req, res) => {
    return res.json(["Curso 1","Curso 2", "Curso 3", "Cusro 4" ])                   
})

app.put('/courses/:id', (req, res) => {
    return res.json(["Curso 6","Curso 2", "Curso 3", "Cusro 4" ])                   
})

app.patch('/courses/:id', (req, res) => {
    return res.json(["Curso 6","Curso 7", "Curso 3", "Cusro 4" ])                   
})

app.delete('/courses/:id', (req, res) => {
    return res.json(["Curso 6","Curso 7", "Cusro 4" ])                   
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
