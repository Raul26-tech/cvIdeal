import supertest from "supertest";
import { app } from "../src/framework/http/app";

export const testServer = supertest(app);
