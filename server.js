//create HTTP server
import exp from "express"
const app=exp() // internally contains http server
import { userApp } from "./APIs/userAPI.js"
import { productApp } from "./APIs/productAPI.js"

//use body parser middleware -- extracting the body of req object -- parsing -- if not written -> req of body is always undefined
app.use(exp.json()) // this line takes the req object and extracts body of req object

//create custom middleware
function middleware1(req,res,next){ //express middleware has 3 parameters(difference) -> req obj,es obj,next fowards to the ext middleware
    //send res from middleware
    // res.json({message:"this res is from middleware1"})

    //foward req to next
     console.log("middleware 1 is executed")
     next()
}

function middleware2(req,res,next){ //express middleware has 3 parameters(difference) -> req obj,es obj,next fowards to the ext middleware
    //send res from middleware
    // res.json({message:"this res is from middleware2"})

    //foward req to next
     console.log("middleware 2 is executed")
     next()
}

//use middleware
app.use(middleware1)
app.use(middleware2)

//forward req to userApi if path start with /user-api -> middleware
app.use('/user-api',userApp)

//forward req to productApi if path start with /user-api -> middleware
app.use('/product-api',productApp)

//set a port number
const port=3000
//assign port number to HTTP server
app.listen(port, () => console.log(`server listening to port ${port}...`))