const mongoose = require("mongoose");

// Define the schema for the first model
const VisitorsSchema = new mongoose.Schema({
    name:String,
        email:String,
        phone:String,
        adhar:String,
        mon:String,
        city:String,
        date:Date,
        number:Number
    
});

// Define the first model
const BookModel = mongoose.model("book", VisitorsSchema);

// Export the first model
module.exports= BookModel;
