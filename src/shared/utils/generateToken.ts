import { sign } from "jsonwebtoken";
import { config } from "dotenv";

export function GenerateToken(userId: string) {
  const secretToken = process.env.AUTH_SECRET_TOKEN;
  const expiresIn = process.env.AUTH_EXPIRES_IN;

  // Gerando o token
  const token = sign({}, secretToken, {
    subject: userId,
    expiresIn: `${expiresIn}d`,
  });

  return token;
}
