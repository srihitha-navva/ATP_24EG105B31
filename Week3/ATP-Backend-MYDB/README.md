Steps:
1. Generate package.json
    npm init -y
2. Create http server -> express server
    npm install express 
3. create server.js file
4. Install mongoose and connect to MongoDB server
5. Build USER API
   - create user 
   - read all users
   - read user by id
   - update a user by id
   - delete user by id
6. create schema and modelel of the resource(user)
7. create user API and define routes


--> Handling unavailable resources 
--> Validators during update
--> Hashing Password -- (bcryotjs) - module
--> Unique fields -- optional
--> Refined version of error handling middleware


--> Status code:
  -- 200 -> for any success operation(that operation is success)
  -- 201 -> creating resources(resource creation)
- Client side errors
  -- 400 -> bad request (eg: valiadation errors which are made by client/user)
  -- 401 -> unauthorised 
  -- 404 -> not found (if resource is not available in db)
- Server side errors
  -- 500 -> server error




# 07-03-2026
 - User Authentication -> submit credentials and get token (login)
   -- Public routes - by anyone
      req----->public route
   -- Protected routes - by authenticated users only 
      req----->middleware----->protected route

   -- local storage -> can be accessed by browser
   -- session storage -> can also be accessed by browser
   -- cookie -> broswer can read data but if http is enabeld it returns emplty string
   -- therefore we should store cookie in http cookie to be safe from XSS attack
   -- XSS -> cross-site scripting 
   -- CSRF -> cross site scripting forgery

   -- To access cookies property of req object we need cookie parcer midddleware. Otherwise req.cookies is undefined


   Assignment
   make the following routes protected
    - read users and products
    - read user and product by id
    - update user and product
    - delete user and product



# 12-03-2026
AUTHENTICATION
 - client side application makes a login req(post)
 - the server will create the jwt token
 - the http only cookie will be stored in the cookie storage of the browser
 - cookie will be sent along with the token for verification and validity to the middleware(decodes the token if success verified else not valid sends a msg to re-login)
 - in cross origin purpose the cookie wont be passed along the token
 - then the routes which are to br protected is changed(?)
 - same origin req
   -- when the client also running on the same domain of the server
   -- cookies will be sent along with req automatically 
 - cross origin req
   -- when the client and server applications are running in different domains
   -- the token should be explicitly included to the req
 - signed method enocdes the payload using the secret key
 - desiging architecture

 - nested document
 - ref document

 - aggregation pipeline - populate method
