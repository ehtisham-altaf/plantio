const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if(authHeader)
    {
        token = authHeader;
        jwt.verify(token,process.env.JWT_SECRET_KEY,(err,user)=>{
            if(err)
            {
                res.status(403).json({message:"token is not valid"});
            }
            else{
                req.user = user;
                next();
            }
        })
    }
    else
    {
        res.status(401).json({message: "You are not Loged in"});
    }
}

const verifyAdminWithToken = (req, res, next) => {
    verifyToken(req, res, ()=> {
      if(req.user.isAdmin === true) {
          next()
      } else {
          res.status(403).json({message: "you are not allowed to do thet"});      
      }
    })   
  }

module.exports = { verifyToken , verifyAdminWithToken};