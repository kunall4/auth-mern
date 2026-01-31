import express from "express"
import dotenv from "dotenv"
import  Router  from "./routes/authRouter.js"
import cors from "cors"
dotenv.config()
import connectdb from "./models/DB.js"
import productRouter from "./routes/productRouter.js"
import { router } from "./routes/cart.router.js"
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors( ))    
app.use("/auth",Router)
app.use("/products",productRouter)
app.use("/cart",router)

connectdb()
const port = process.env.PORT || 4000

app.get('/radha',(req,res)=>{
    res.send("jay jay shree radha"
    )
})

app.listen(port ,()=>{
    console.log(`server is ruuning at http://localhost:${port}`)
})
