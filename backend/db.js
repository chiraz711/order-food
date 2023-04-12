const mongoose = require("mongoose")
const connectdb = ()=>{
    try {
       mongoose.connect('mongodb+srv://chiraz:chiraz@cluster0.dt0zng7.mongodb.net/?retryWrites=true&w=majority' )
       console.log('database is connect')
    } catch (error) {
    console.log("error")
    }
}
module.exports=connectdb