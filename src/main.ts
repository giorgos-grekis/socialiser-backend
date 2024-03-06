import express from "express";
import { SocialiserServer } from "./setup-server";
import databaseConnection from "./setup-database";
import { config } from "./config";

// import types
import { type Express } from "express";

class Application {
  public initialize(): void {
    this.loadConfig();
    databaseConnection();
    const app: Express = express();
    const server: SocialiserServer = new SocialiserServer(app);
    // Every time the application start it will call this method.
    server.start();
  }

  private loadConfig(): void {
    config.validateConfig();
  }
}

const application: Application = new Application();

application.initialize();
