var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var User = require('../user/User');

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');

router.post('/register', function(req, res) {
  
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  
  User.create({
    name : req.body.name,
    email : req.body.email,
    password : hashedPassword
  },
  function (err, user) {
    if (err) return res.status(500).send("There was a problem in SignUp the user.")
    // create a token
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token });
  }); 
});

// Here we’re expecting the user to send us three values, a name, an email and a password. We’re immediately going to take the password and 
// encrypt it with Bcrypt’s hashing method. Then take the hashed password, include name and email and create a new user. After the user has been 
// successfully created, we’re at ease to create a token for that user.

// The jwt.sign() method takes a payload and the secret key defined in config.js as parameters. It creates a unique string of characters representing the payload. 
// In our case, the payload is an object containing only the id of the user. Let’s write a piece of code to get the user id based on the token we got back from the 
// register endpoint.


router.get('/me', function(req, res) {
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    
    res.status(200).send(decoded);
  });
});

module.exports = router;


// Open up Postman and hit the register endpoint (/api/auth/register). Make sure to pick the POST method and x-www-form-url-encoded. Now, add some values. 
// My user’s name is Mike and his password is ‘thisisasecretpassword’. That’s not the best password I’ve ever seen, to be honest, but it’ll do. Hit send!

// See the response? The token is a long jumbled string. To try out the /api/auth/me endpoint, first copy the token. Change the URL 
// to /me instead of /register, and the method to GET. Now you can add the token to the request header.