const jwt = require('jsonwebtoken');
exports.AuthToken = async (req,res,next) => {
    try{

        console.log(req.headers)

        const rawToken = req.headers.token || req.headers.authorization;

        console.log(rawToken)

        if(!rawToken){
            return res.status(400).json({ error:"No token"})
        }

        const token = rawToken.startsWith('Bearer ')
            ? rawToken.split(' ')[1]
            : rawToken;

        const decode = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decode;

        next();

    }catch (error) {

        console.log("token is not valid : ",error)

        return res.status(400).json({
            error:"Token is Not valid"
        });

    }
}