const mongoose=require('mongoose');
const { default: pizza } = require('../foodtravel/src/data');

const pizzaSchema=mongoose.Schema({
    name:{
        typeof:String,
        required:true,
    },
    varients:{
        typeof:Array,
        required:true,
    },
    prices:{
        typeof:String,
        required:true,
    },
    imageUrl:{
        typeof:String,
        required:true,
    },
    category:
    {
        typeof:String,
        required:true,
    },
    description:
    {
        typeof:String,
        required:true,
    }
});

module.exports=pizza=mongoose.model('etudiant',pizzaSchema)