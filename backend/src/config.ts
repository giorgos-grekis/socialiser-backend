import dotenv from "dotenv";

dotenv.config({});

type EnvTypes = string | undefined;

class Config {
  // ADD all env varibles here
  public DATABASE_URL: EnvTypes;
  public JWT_TOKEN: EnvTypes;
  public NODE_ENV: EnvTypes;
  public SECRET_KEY_ONE: EnvTypes;
  public SECRET_KEY_TWO: EnvTypes;
  public CLIENT_URL: EnvTypes;
  public SERVER_PORT: EnvTypes;
  public REDIS_HOST: EnvTypes;

  private readonly DEFAULT_DATABASE_URL =
    "mongodb://localhost:27017/socialiser";

  constructor() {
    this.DATABASE_URL = process.env.DATABASE_URL ?? this.DEFAULT_DATABASE_URL;
    this.JWT_TOKEN = process.env.JWT_TOKEN ?? "1234";
    this.NODE_ENV = process.env.NODE_ENV ?? "";
    this.SECRET_KEY_ONE = process.env.SECRET_KEY_ONE ?? "";
    this.SECRET_KEY_TWO = process.env.SECRET_KEY_TWO ?? "";
    this.CLIENT_URL = process.env.CLIENT_URL ?? "";
    this.SERVER_PORT = process.env.SERVER_PORT ?? "5000";
    this.REDIS_HOST = process.env.REDIS_HOST ?? "";
  }

  public validateConfig(): void {
    // maybe this not need
    for (const [key, value] of Object.entries(this)) {
      if (value === undefined) {
        throw new Error(`Configuration ${key} is undefined.`);
      }
    }
  }
}

export const config: Config = new Config();
