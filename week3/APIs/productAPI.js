/*Create product API with below operations
  - create new Product ({productId,name,brand,price})
  - read all product
  - read all product by brand
  - update a product
  - delete a product by id
*/

//create mini-express app
import exp from 'express'
export const productApp=exp.Router()

let products=[]

//2.
productApp.get('/products',(req,res) => {
    //read all products
    res.json({message:"all products",payload:products})
})

//3. 
productApp.get('/products/:brand',(req,res) => {
    //get brand of product from url parameter
    let brandOfUrl=(req.params.brand)
    //find index of brand
    let filteredBrand=products.filter(productObj => productObj.brand===brandOfUrl)
    //if brand not found
    if(filteredBrand.length===0)
        return res.json({message:"Brand not found"})
    //send res and display
    res.json({message:"Products by brand",payload:filteredBrand})
})

//1.
productApp.post('/products',(req,res) => {
    //get product from client
    const newProduct=req.body
    //push newProduct into products
    products.push(newProduct)
    //send res
    res.json({message:"Product added"})
})

//4.
productApp.put('/products',(req,res) =>{
    //get modified product from client
    let modifiedProduct=req.body
    //get index of existing product 
    let index=products.findIndex(productObj => productObj.productId===modifiedProduct.productId)
    //if product not found
    if(index===-1)
        return res.json({message:"Product not found"})
    //update product with index
    products.splice(index,1,modifiedProduct)
    //send response
    res.json({message:"Product updated"})
})

//5.
productApp.delete('/products/:productId',(req,res) =>{
    //get index of product to be removed
    let idOfUrl=Number(req.params.productId)
    //find index of id
    let index=products.findIndex(productObj => productObj.productId===idOfUrl)
    //if not found
    if(index===-1)
        return res.json({message:"Product not found"})
    //delete that product
    products.splice(index,1)
    //send res
    res.json({message:"Product deleted"})
})