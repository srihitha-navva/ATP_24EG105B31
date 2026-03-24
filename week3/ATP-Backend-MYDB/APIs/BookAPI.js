//create min express application
import exp from 'express'
import { BookModel } from '../models/BookModel.js'

export const bookApp=exp.Router()

//Define Book API routes

//create a book
bookApp.post('/books',async(req,res) => {
    const newBook=req.body
    const newBookDocument=new BookModel(newBook)
    const result=await newBookDocument.save()
    console.log("result:",result)
    res.status(201).json({message:"Book created"})
})

//get all books
bookApp.get('/books',async(req,res) => {
    let bookList=await BookModel.find()
    res.status(200).json({message:"Books:",payload:bookList})
})

//get book by bookId
bookApp.get('/books/:id',async(req,res) => {
    const bid=req.params.id
    const bookObj=await BookModel.findById(bid)
    if(!bookObj)
        return res.status(404).json({message:"Book not found"})
    res.status(200).json({message:"Book:",payload:bookObj})
})

//update book by bookId
bookApp.put('/books/:id',async(req,res) => {
    const bid=req.params.id
    const modfiedBook=req.body
    const updatedBook=await BookModel.findByIdAndUpdate(bid,{$set:{...modfiedBook}},{returnDocument:'after',runValidators:true})
    res.status(200).json({message:"Book updated",payload:updatedBook})
})

//delete book by bookId
bookApp.delete('/books/:id',async(req,res) => {
    const bid=req.params.id
    let deletedBook=await BookModel.findByIdAndDelete(bid)
    if(!deletedBook)
        return res.status(404).json({message:"Book not found"})
    res.status(200).json({message:"Product Deleted",payload:deletedBook})
})