import { AuthMeController } from "@modules/auth/http/controllers/auth-me.controller";
import { SignInController } from "@modules/auth/http/controllers/sign-in.controller";
import { SignUpController } from "@modules/auth/http/controllers/sign-up.controller";
import { AuthMeService } from "@modules/auth/services/auth-me.service";
import { SignInService } from "@modules/auth/services/sign-in.service";
import { SignUpService } from "@modules/auth/services/sign-up.service";
import { CreateFormController } from "@modules/form/http/controllers/create-form.controller";
import { FormRepository } from "@modules/form/repositories/form.repository";
import { CreateFormService } from "@modules/form/services/create-form.service";
import { CreateUserController } from "@modules/user/http/controllers/create-user.controller";
import { UserRepository } from "@modules/user/repositories/user.repository";
import { CreateUserService } from "@modules/user/services/create-user.service";
import { Container } from "inversify";

export const container = new Container();

// AUTH
container.bind<AuthMeController>("AuthMeController").to(AuthMeController);
container.bind<AuthMeService>("AuthMeService").to(AuthMeService);

container.bind<SignInController>("SignInController").to(SignInController);
container.bind<SignInService>("SignInService").to(SignInService);

container.bind<SignUpController>("SignUpController").to(SignUpController);
container.bind<SignUpService>("SignUpService").to(SignUpService);

// USER
container
  .bind<UserRepository>("UserRepository")
  .to(UserRepository)
  .inSingletonScope();

// user - create
container
  .bind<CreateUserController>("CreateUserController")
  .to(CreateUserController);
container.bind<CreateUserService>("CreateUserService").to(CreateUserService);

// FORM
container
  .bind<FormRepository>("FormRepository")
  .to(FormRepository)
  .inSingletonScope();

//  form - create
container
  .bind<CreateFormController>("CreateFormController")
  .to(CreateFormController);
container.bind<CreateFormService>("CreateFormService").to(CreateFormService);
