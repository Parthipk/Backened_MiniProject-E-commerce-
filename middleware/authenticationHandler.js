const jwt = require('jsonwebtoken');

const authenticationHandler = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).send("Please sign in.");
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        req.user = {
            username: decoded.username,
            id: decoded.id,
            address: decoded.address
        };

        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token." });
    }
};

module.exports = authenticationHandler;
