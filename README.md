# nodejs-secure restful-api with jwt web-Token

### Prerequisites

Node
npm
Express
jsonwebtoken
mongoose

How to create a RESTful CRUD API using Nodejs?

And how to secure our API with JWT Web-Token?

API using mongodb as the database.

With this code, we can check our user and password and pass back a token in a JSON response. 
We are using mongodb to register the user and jsonwebtoken to create the token.


### Clone

- Clone this repo to your local machine using [https://github.com/Abdurraheem/REST-API-JWTWEB-TOKEN.git]

### Setup

> now install npm and packages

```shell
$ npm install
$ bower install (if require)
```
## Running the tests

It consist of a User model and controller. The model
defines the data, and the controller will contain all 
the business logic needed to interact with the database. 

It has a db file which will be used to
connect the app to the database, and an app file used
for bootstrapping the application itself.

The server file is used to spin up the server and tells the
app to listen on a specific port.

Let’s test this out. Why not?
Open up your REST API testing tool of choice, I use Postman or Insomnia, but any will do.

Go back to your terminal and run node server.js. If it is running, stop it, save all changes to you files, and run node server.js again.

Open up your REST API testing tool of choice, I use Postman or Insomnia, but any will do.

Go back to your terminal and run node server.js. If it is running, stop it, save all changes to you files, and run node server.js again.

Open up Postman and hit the register endpoint (http://localhost:3000/api/users/registration). Make sure to pick the POST method and x-www-form-url-encoded.
Now, add some values. My user’s name is 'Mohammad' , email is 'mohdabdur786@gmail.com' and his password is 'Wow@123' 

See the response? The token is a long jumbled string. 
To try out the http://localhost:3000/api/users endpoint, first copy the token. Change the URL to http://localhost:3000/api/users , and the method to GET.
Now you can add the token to the request header.

You will get list of users...

Try to update users the http://localhost:3000/api/users endpoint, and the method to PUT with x-www-form-url-encoded.
Now, add some values.Update name is 'Abdur' , email is 'mohdabdur786@gmail.com' and his password is 'Wow@123' 

Delete some users hit http://localhost:3000/api/users/(_id) endpoint with the method DELETE.

##Disclaimer: The logout endpoint is not needed. The act of logging out can solely be done through the client side. A token is usually kept in a cookie or the browser’s localstorage. Logging out is as simple as destroying the token on the client. This /logout endpoint is created to logically depict what happens when you log out. The token gets set to null.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
