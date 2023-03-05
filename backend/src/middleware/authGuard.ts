import jwt from "jsonwebtoken";
interface JwtPayload {
  _id: string;
}
export default (req: any, res: any, next: any) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.KEYHASH!) as JwtPayload;
    const userId = decodedToken._id;
    req.auth = {
      _id: userId,
    };
    next();
  } catch (error) {
    res.status(401).json({ error });
  }
};
