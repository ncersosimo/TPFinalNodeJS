// console.log("Esto arranca?")
// const express = require('express') //sintaxis commonJS
import express from 'express'; //sintaxis ES Module
import './config/mongoDB.js'
import { router as authRouter } from './routers/auth.js';
import { router as productsRouter } from './routers/products.js';

const PORT = process.env.PORT ?? 3000
const app = express();
app.use(express.json())
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/auth", authRouter);

app.listen(PORT, (err) => {
    err ? console.log(`Server not running:${err}`)
        : console.log(`Server up: http://localhost:${PORT}`)
})
