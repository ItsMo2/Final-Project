# e-commerce application
this app has 2 resources: products and carts
## what does this project does?
it allows the client to create / read / update / delete products and allows him to create a cart and add products to it 

## install steps
1. clone the repo
2. run `npm i` in the terminal
3. create a `.env` file in the root directory and insert the following :
```
MONGO_URI=your_mongodb_connection_string
PORT=3000
```
4. test the app on postman 
## run the server
run the server using `node app.js`
## Tech used in this project
I used dependecies like express,mongoose and dotenv , and used database application (MongoDB) 