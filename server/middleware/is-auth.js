const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');

  if(!authHeader) {
    console.log('no autheader');
    req.isAuth = false;
    return next();
  };

  const token = authHeader.split(' ')[1];

  if(!token || token === '') {
    console.log('no token');
    req.isAuth = false;
    return next();
  };

  let decodedToken;
  try {
    decodedToken = jwt.verify(token, '1234567890');
  } catch(err) {
    console.log(err)
    console.log('can\'t verify token');
    req.isAuth = false;
    return next();
  };

  if(!decodedToken) {
    console.log('token wrong');
    req.isAuth = false;
    return next();
  };

  req.isAuth = true;
  req.userId = decodedToken.userId;
  console.log('Authorized');
  next();
};