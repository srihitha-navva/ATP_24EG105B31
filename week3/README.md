# WEEK 3 -- Backend Development with Express and MongoDB

- Backend basics
   - HTTP request and response cycle
   - client-side app and backend app
   - API endpoints
   - REST API
   - CRUD operations
- Express JS
   - creating HTTP server
   - routing
   - middleware
   - body parser middleware
   - mini express applications using Router
- MongoDB
   - NoSQL database
   - collections
   - documents
   - MongoDB commands
   - query operators
- Authentication basics
   - public routes
   - protected routes
   - JWT token
   - cookies
   - verify token middleware

## Files:

### server.js
Express HTTP server
   - imports express module
   - creates express app
   - uses express.json() middleware
   - creates custom middlewares
   - forwards requests to user API and product API
   - listens on port 3000

### APIs/userAPI.js
User REST API using express Router
   - GET all users
   - GET user by id
   - POST create user
   - PUT update user
   - DELETE user by id

### APIs/productAPI.js
Product REST API using express Router
   - POST create product
   - GET all products
   - GET products by brand
   - PUT update product
   - DELETE product by productId

### req.http
HTTP requests for testing APIs
   - user CRUD requests
   - product CRUD requests
   - GET, POST, PUT, DELETE methods

### package.json
Project configuration
   - type module
   - main file as server.js
   - dependencies: express, nodemon

### ATP-Backend-MYDB
Backend project with MongoDB integration
   - connects backend with MongoDB
   - uses models and schemas
   - handles users, products, and books
   - includes authentication and protec. routes

### ATP-Backend-MYDB/server.js
Express server with database connection
   - connects to MongoDB
   - imports API routes
   - uses middleware
   - handles unavailable routes and errors

### ATP-Backend-MYDB/models/UserModel.js
User model
   - defines user schema
   - stores user details in MongoDB

### ATP-Backend-MYDB/models/ProductModel.js
Product model
   - defines product schema
   - stores product details in MongoDB

### ATP-Backend-MYDB/models/BookModel.js
Book model
   - defines book schema
   - stores book details in MongoDB

### ATP-Backend-MYDB/APIs/UserAPI.js
User API with database operations
   - create user
   - read all users
   - read user by id
   - update user
   - delete user
   - login/authentication

### ATP-Backend-MYDB/APIs/ProductAPI.js
Product API with database operations
   - create product
   - read all products
   - read product by id
   - update product
   - delete product

### ATP-Backend-MYDB/APIs/BookAPI.js
Book API with database operations
   - create book
   - read books
   - update book
   - delete book

### ATP-Backend-MYDB/auth/auth.js
Authentication logic
   - handles login
   - creates JWT token
   - sends token using cookie

### ATP-Backend-MYDB/middlewares/verifyToken.js
Token verification middleware
   - checks protected routes
   - verifies JWT token
   - allows access only for authenticated users

### ATP-Backend-MYDB/req.http
HTTP requests for testing MongoDB backend APIs
   - user requests
   - product requests
   - book requests
   - authentication requests
