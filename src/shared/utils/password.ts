import bcrypt from "bcryptjs";

export async function hashGenerate(password: string) {
  const generate = await bcrypt.hash(password, 10);

  console.log(generate);

  return generate;
}
