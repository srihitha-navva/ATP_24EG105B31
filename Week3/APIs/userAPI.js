//Create mini-express application (Separate route) -- 
import exp from 'express'
export const userApp=exp.Router()


//Test data -- in future replace this test data with database
let users =[]

//create API/REST API (http://localhost:3000/users) -- url-path should be nouns not verbs

//route to handle GET req of client --> get-users
userApp.get('/users',(req,res) => { //(path, req handler -> callback function -> (request object,request response))
    //send response to client
    // dummy response for our understaidng --> res.json({message:"This res for GET users req"}) //js object not json

    //read all users and send response
    res.json({message:"all users",payload:users})
}) 

//route to handle GET user BY ID
userApp.get('/users/:id',(req,res) =>{
    //get id of user from url parameter
    let idOfUrlget=Number(req.params.id)
    //find index of user
    let index=users.findIndex(userObj => userObj.id===idOfUrlget)
    //if user not found
    if(index===-1)
        return res.json({message:"User not found"})
    //get user by id
    res.json({message:"User by id",payload:users[index]})
})

//route to handle POST req of client--> post-users
userApp.post('/users',(req,res) => {
    // res.json({message:"This res for CREATE users req"})

    //get user from client
    const newUser=req.body
    //push user into users
    users.push(newUser)
    //send res
    res.json({message:"user created"})

}) 

//route to handle PUT req of client
userApp.put('/users',(req,res) => {
    // res.json({message:"This res for UPDATE users req"})

    //get modified user from client{}
    let modifiedUser=req.body
    //get index of existing user in users array
    let index=users.findIndex(userObj => userObj.id===modifiedUser.id)
    //if user not found
    if(index===-1)
        return res.json({message:"User not found"})
    //update user with index
    users.splice(index,1,modifiedUser)
    //send response
    res.json({message:"User updated"})

})

//route to handle DELETE req of client
userApp.delete('/users/:id',(req,res) => {
    // res.json({message:"This res for DELETE users req"})

    //get id of user from url parameter
    let idOfUrl=Number(req.params.id)
    //find index of user
    let index=users.findIndex(userObj => userObj.id===idOfUrl)
    //if user not found
    if(index===-1)
        return res.json({message:"User not found"})
    //delete user by index
    users.splice(index,1)
    //send res
    res.json({message:"User removed"})
})