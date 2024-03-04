import express from "express";

import { SocialiserServer } from "./setup-server";

// import types
import { type Express } from "express";

class Application {
  public initialize(): void {
    const app: Express = express();
    const server: SocialiserServer = new SocialiserServer(app);
    // Every time the application start it will call this method.
    server.start();
  }
}

const application: Application = new Application();

application.initialize();
