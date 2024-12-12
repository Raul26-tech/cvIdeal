import "reflect-metadata";
import { app } from "./app";

app.listen(process.env.PORT, () => {
  console.log(`\n\n SERVER IS RUNNING ON PORT ${process.env.PORT}\n\n`);
});

app.on("error", () => {
  console.log("\n\n   FAILURE AN UNEXPECTED ERROR OCCURRED  \n\n");
});
