const authentication=  async(req, res, next)=>{
    try {
        const jwtToken = req.header("token")

        if(!jwtToken){
            return res.status(403).json("not authorized")
        }

        const payload = jwt.verify(jwtToken, process.env.SECRET);
        console.log(payload)

        req.user = payload.user;

        next();
        
    } catch (error) {
        console.log(error.message);
        return res.status(403).json("Not Authorized")
    }
}

export default authentication;
