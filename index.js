const express = require('express')
const path = require('path')
const { application } = require('express')

const app = express()


app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname, './public/index.html'))
    })

app.get('/contact',(req,res) => {
    res.sendFile(path.resolve(__dirname, './public/contact.html'))
    })


app.get('/about',(req,res) => {
    res.sendFile(path.resolve(__dirname, './public/about.html'))
    })

app.get('/catalogue',(req,res) => {
        res.sendFile(path.resolve(__dirname, './public/catalogue.html'))
    })

app.get('/service',(req,res) => {
        res.sendFile(path.resolve(__dirname, './public/service.html'))
    })

app.use(express.static('static'))
app.use(express.static('estilos'))
app.use(express.static('img'))

app.use((req,res) => {
    res.status(404).send('No se encontro tu pagina....!!!!')
})


app.listen(3000)
console.log('Server on port ${3000}')