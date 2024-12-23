import { UserRepository } from "@modules/user/repositories/user.repository";
import { Container } from "inversify";

export const container = new Container();

container
  .bind<UserRepository>("UserRepository")
  .to(UserRepository)
  .inSingletonScope();
