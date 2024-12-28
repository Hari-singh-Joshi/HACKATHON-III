const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const VisitorsModel=require("./models/visitors")
const BookModel=require("./models/books")


const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/visitors");
app.post('/register',(req,res)=>{
VisitorsModel.create(req.body)
.then(visitors=>res.json(visitors))
.catch(err=>res.json(err))
})

mongoose.connect("mongodb://127.0.0.1:27017/visitors");
app.post('/book',(req,res)=>{
BookModel.create(req.body)
.then(book=>res.json(book))
.catch(err=>res.json(err))
})

app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    VisitorsModel.findOne({email: email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("Success")
            }else{
                res.json("invalid email or password")
            }
        }else{
            res.json("no record exist")
        }
    })
  
    })


app.listen(3001,()=>{
    console.log("server is running at port:3001");
})