const express=require('express')
const connectdb=require('./db')
const app=express()

app.use(express.json())



app.listen(4500,()=>{
console.log('server connected')
})

connectdb()
