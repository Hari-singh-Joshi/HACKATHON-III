const mongoose=require("mongoose")

const VisitorsSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    last:String,
    city:String,
    zip:Number
})


const VisitorsModel=mongoose.model("visitors",VisitorsSchema)
module.exports=VisitorsModel