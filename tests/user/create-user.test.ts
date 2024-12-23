// import { CreateUserService } from "../services/createUserService";
// import { UserRepository } from "../repositories/user.repository";
// import { CreateUserDto } from "../dtos/create-user.dto";
// import { BadRequest } from "src/framework/http/errors/BadRequest";
// import { hashGenerate } from "@utils/password";

// // Mock do UserRepository
// const mockUserRepository = {
//   findByEmail: jest.fn(),
//   create: jest.fn(),
// };

// // Mock do hashGenerate
// jest.mock("@utils/password", () => ({
//   hashGenerate: jest.fn(),
// }));

// describe("CreateUserService", () => {
//   let createUserService: CreateUserService;

//   beforeEach(() => {
//     // Resetando mocks antes de cada teste
//     jest.clearAllMocks();
//     createUserService = new CreateUserService(
//       mockUserRepository as unknown as UserRepository
//     );
//   });

//   it("deve criar um usuário com sucesso", async () => {
//     const input: CreateUserDto = {
//       name: "John Doe",
//       email: "john@example.com",
//       emailConfirm: "john@example.com",
//       password: "password123",
//       passwordConfirm: "password123",
//       phone: "123456789",
//     };

//     mockUserRepository.findByEmail.mockResolvedValue(null); // Usuário não existe
//     (hashGenerate as jest.Mock).mockResolvedValue("hashedPassword123");
//     mockUserRepository.create.mockResolvedValue({
//       id: "1",
//       ...input,
//       password: "hashedPassword123",
//       status: "active",
//     });

//     const result = await createUserService.execute(input);

//     expect(mockUserRepository.findByEmail).toHaveBeenCalledWith(input.email);
//     expect(hashGenerate).toHaveBeenCalledWith(input.password);
//     expect(mockUserRepository.create).toHaveBeenCalledWith({
//       name: input.name,
//       email: input.email,
//       password: "hashedPassword123",
//       phone: input.phone,
//       status: "active",
//     });
//     expect(result).toEqual({
//       id: "1",
//       name: input.name,
//       email: input.email,
//       password: "hashedPassword123",
//       phone: input.phone,
//       status: "active",
//     });
//   });

//   it("deve lançar erro se o email já estiver em uso", async () => {
//     const input: CreateUserDto = {
//       name: "John Doe",
//       email: "john@example.com",
//       emailConfirm: "john@example.com",
//       password: "password123",
//       passwordConfirm: "password123",
//       phone: "123456789",
//     };

//     mockUserRepository.findByEmail.mockResolvedValue({
//       id: "1",
//       email: input.email,
//     });

//     await expect(createUserService.execute(input)).rejects.toThrow(
//       new BadRequest("O email informado já está em uso.")
//     );
//     expect(mockUserRepository.findByEmail).toHaveBeenCalledWith(input.email);
//   });

//   it("deve lançar erro se email e emailConfirm não coincidirem", async () => {
//     const input: CreateUserDto = {
//       name: "John Doe",
//       email: "john@example.com",
//       emailConfirm: "john.doe@example.com", // Não coincide
//       password: "password123",
//       passwordConfirm: "password123",
//       phone: "123456789",
//     };

//     await expect(createUserService.execute(input)).rejects.toThrow(
//       new BadRequest("E-mail e confirmação de e-mail não coincidem.")
//     );
//   });

//   it("deve lançar erro se password e passwordConfirm não coincidirem", async () => {
//     const input: CreateUserDto = {
//       name: "John Doe",
//       email: "john@example.com",
//       emailConfirm: "john@example.com",
//       password: "password123",
//       passwordConfirm: "password456", // Não coincide
//       phone: "123456789",
//     };

//     await expect(createUserService.execute(input)).rejects.toThrow(
//       new BadRequest("Senha e confirmação de senha não coincidem.")
//     );
//   });
// });
