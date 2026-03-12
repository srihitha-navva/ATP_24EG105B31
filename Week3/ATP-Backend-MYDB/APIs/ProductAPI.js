//create mini express application(seperate route)
import exp from 'express'
import { ProductModel } from '../models/ProductModel.js'
import { hash,compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { verifyToken } from '../middlewares/verifyToken.js'
import { config } from 'dotenv'
const {sign}=jwt

config()


export const productApp=exp.Router()

//define product rest apis routes
//create new products
productApp.post("/products",async(req,res) => {
    //get new product obj from req
    const newProduct=req.body
    //create new product document
    const newProductDocument=new ProductModel(newProduct)
    //save -- returns newly retured object
    const result=await newProductDocument.save()
    console.log("result:",result)
    //send res
    res.status(201).json({message:"Product created"})
})

//read all products
productApp.get("/products",verifyToken,async(req,res) => {
    //read all products from db
    let productsList=await ProductModel.find()
    //send res
    res.status(200).json({message:"Products:",payload:productsList})
})

//read a product by id
productApp.get("/products/:id",verifyToken,async(req,res) => {
    //read object id from req params
    const pid=req.params.id
    const productObj=await ProductModel.findById(pid)
   // if product not found
   if(!productObj)
    return res.status(404).json({message:"Product not found"})
    //send res
    res.status(200).json({message:"Product",payload:productObj})
})

//update a product by productId
productApp.put("/products/:id",verifyToken,async(req,res) => {
    //get modified product from req
    const modifiedProduct=req.body
    const pid=req.params.id
    //find product by id and update at the same time->
    const updatedProduct=await ProductModel.findByIdAndUpdate(pid,{$set:{...modifiedProduct}},{returnDocument:'after',runValidators:true})
    //send res
    res.status(200).json({message:"Product updated",payload:updatedProduct})
})

//delete a product by productId
productApp.delete('/products/:id',verifyToken,async(req,res) => {
    //get id to be deleted
    const pid=req.params.id
    //find and delete product by id
    let deletedProduct=await ProductModel.findByIdAndDelete(pid)
    //if not found
    if(!deletedProduct)
        return res.status(404).json({message:"Product not found"})
    //send res
    res.status(200).json({message:"Product deleted",payload:deletedProduct})
})
