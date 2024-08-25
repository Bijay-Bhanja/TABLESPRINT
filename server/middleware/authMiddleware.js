const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY;



exports.authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    // console.log(authHeader)
    const token = authHeader && authHeader.split(' ')[1];
    // console.log(token)

    if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

    jwt.verify(token, secretKey, (err, user) => {
        if (err){
            
            return res.status(403).json({ message: 'Invalid token' })
        };
      
        req.user = user; 
        next();
    });
};
