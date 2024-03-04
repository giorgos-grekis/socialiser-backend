import express from "express";
import { SocialiserServer } from "./setup-server";
import databaseConnection from "./setup-database";

// import types
import { type Express } from "express";

class Application {
  public initialize(): void {
    databaseConnection();
    const app: Express = express();
    const server: SocialiserServer = new SocialiserServer(app);
    // Every time the application start it will call this method.
    server.start();
  }
}

const application: Application = new Application();

application.initialize();
