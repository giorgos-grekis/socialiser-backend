import { json, urlencoded, Response, Request, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import hpp from "hpp";
import compression from "compression";
import cookieSession from "cookie-session";
import HTTP_STATUS from "http-status-codes";

import "express-async-errors";

// import types
import { type Application } from "express";
import { type Server } from "http";

export class SocialiserServer {
  //   private app: Application;

  constructor(private app: Application) {
    // this.app = app;
  }

  public start(): void {
    this.securityMiddleware(this.app);
    this.standardMiddleware(this.app);
    this.routesMiddleware(this.app);
    this.globalErrorHandler(this.app);
    this.startServer(this.app);
  }

  private securityMiddleware(app: Application): void {
    app.use(
      cookieSession({
        name: "session",
        keys: ["test1", "test2"],
        maxAge: 24 * 7 * 3600,
        secure: false,
      })
    );
    app.use(hpp());
    app.use(helmet());
    app.use(
      cors({
        origin: "*",
        credentials: true,
        optionsSuccessStatus: 200,
        methods: ["GETS", "POST", "PUT", "DELETE", "OPTIONS"],
      })
    );
  }

  private standardMiddleware(app: Application): void {
    // helps to compress our requests and response.
    app.use(compression());
    // set a limit to request
    // if exceeds 50 megabytes it's going to throw an error.
    app.use(json({ limit: "50mb" }));

    app.use(urlencoded({ extended: true, limit: "50mb" }));
  }

  private routesMiddleware(app: Application): void {}

  private globalErrorHandler(app: Application): void {}

  private startServer(app: Application): void {}

  private createSocketIO(httpServer: Server): void {}

  private startHttpServer(httpServer: Server): void {}
}
