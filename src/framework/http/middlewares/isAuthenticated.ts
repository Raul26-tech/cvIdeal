import { NextFunction, Request, Response } from "express";
import { Unauthorized } from "../errors/Unauthorized";
import jwt from "jsonwebtoken";

export function IsAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const secretKey = process.env.AUTH_SECRET_TOKEN;
  const authHeader = req.headers.authorization;

  console.log(authHeader);

  if (!authHeader) {
    res.status(401).json({ message: "Token de autenticação não fornecido" });

    return;
  }

  const [, token] = authHeader.split(" ");

  if (!token) {
    throw new Unauthorized("Token de autenticação não fornecido");
  }

  try {
    const decoded = jwt.verify(token, secretKey);

    req.user = { id: decoded.sub as string };
    return next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Token inválido" });
    return;
  }
}
