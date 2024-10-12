import jwt, { decode } from "jsonwebtoken"

export const verifyAccessToken = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (authHeader) {
        const token = authHeader.split(" ")[1]
        try {
            jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                if (err) {
                    return res.status(401).json({ success: false, message: "Invalid or Expired Access Token" })
                }
                req.decoded = decoded
                console.log(decoded)
                next()
            })
        } catch (error) {
            return res.status(500).json({ success: false, message: "Internal Server Error", error: error.message })
        }
    } else {
        return res.status(401).json({ success: false, message: "No Access Token provided" })
    }
}