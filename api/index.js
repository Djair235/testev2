import express from "express"
const app = express()

app.get("/", (req, res) => res.send("Express na vercel."))

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})

module.exports = app
