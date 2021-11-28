const {admin} = require("../config/firebase");

module.exports = {
  isAuth: async (req, res, next) => {
    const headerToken = req.headers.authorization;
    if (!headerToken)
      return res.status(400).json({ error: { message: "Token is required" } });
    if (headerToken && headerToken.split(" ")[0] !== "Bearer") {
      return res.json({ error: { message: "Invalid token" } }).status(401);
    }

    const token = headerToken.split(" ")[1];
    try {
      const decodedValue = await admin.auth().verifyIdToken(token);
      if (decodedValue) {
        req.user = {
          uid: decodedValue.uid,
        }
        return next();
      }

      res.status(401).json({ error: { message: "Could not authorize" } });
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: error });
    }
  },
};
