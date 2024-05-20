const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
dotenv.config();
const { Schema } = mongoose;

const productSchema=new Schema({
    imgSRC:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true  
    }
})
const Product=mongoose.model("Product",productSchema)

//! POST REQUEST
app.post("/products",async(req,res)=>{
    try{
        const {imgSRC,title,price}=req.body
        const product=new Product({
            imgSRC,
            title,
            price
        })
       await product.save()
       res.status(201).send(product)
    }
    catch(err){
        res.status(500).send(err)
    }
})

//! GET REQUEST
app.get("/products",async(req,res)=>{
    try{
        const product=await Product.find({})
        res.status(200).send(product)
    }
    catch(err){
        res.status(500).send(err)
    }
})

//! DELETE REQUEST
app.delete("/products/:id",async(req,res)=>{
    try{
        const {id}=req.params
        const product=await Product.findByIdAndDelete(id)
        res.status(200).send(product)
    }
    catch(err){
        res.status(500).send(err)
    }
})

//! GET BYID
app.get("/products",async(req,res)=>{
    try{
        const {id}=req.params
        const product=await Product.findById(id)
        res.status(200).send(product)
    }
    catch(err){
        res.status(500).send(err)
    }
})

//! UPDATE REQUEST
app.put("/products/:id", async(req,res)=>{
 try{
    const {id}=req.params
    const product = await Product.findByIdAndUpdate(id)
    res.status(200).send(product)
 }
 catch(err){
    res.status(500).send(err)
 }
})


const PORT = process.env.PORT;
const DB = process.env.DB_URL;

mongoose.connect(DB).then(() => console.log("Connected!"));
app.listen(PORT, () => console.log("Port listen", PORT));
 