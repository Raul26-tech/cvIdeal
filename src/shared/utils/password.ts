import bcrypt from "bcryptjs";

export async function HashGenerate(hash: string) {
  const generate = await bcrypt.hash(hash, 10);

  return generate;
}

export async function HashCompare(hash: string, hashCompare: string) {
  const matchHash = await bcrypt.compare(hash, hashCompare);

  return matchHash;
}
