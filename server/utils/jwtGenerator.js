import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export default function jwtGenerator(id){
    const payload = {
        user: id
    }

    return jwt.sign(payload, process.env.SECRET, {expiresIn:"1hr"})
}

// module.exports = jwtGenerator;