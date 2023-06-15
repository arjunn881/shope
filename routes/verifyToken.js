import jwt from "jsonwebtoken";


const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) return req.status(401).json("Token is not valid");
      req.user = user;
      next();
    });
  } else {
    return req.status(401).json("You are not authenticated");
  }
};


export const verifyTokenAndAuthorization = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        } else {
            res.status(403).json("You are not allowed to do!!!");

        }
    })
}



