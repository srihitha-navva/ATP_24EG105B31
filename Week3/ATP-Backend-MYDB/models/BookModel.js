import { Schema, model } from "mongoose";
//create Book schema
const BookSchema=new Schema({

    bookId:{
        type:Number,
        required:[true,"Book Id is mandatory"]
    },
    title:{
        type:String,
        required:[true,"Book title is requierd"],
        minLength:[5,"Min Length of title is 5 chars"]
    },
    author:{
        type:String,
        required:[true,"Author of the book is required"]
    },
    price:{
        type:Number,
        required:[true,"Book price is required"],
        min:[200,"Min price is 500"],
        max:[2000,"Max price is 2000"]
    },
    genre:{
        type:String,
        required:[true,"Book genre is required"]
    }
},{
    versionKey:false,
    timestamps:true
})

export const BookModel=model("Book",BookSchema)