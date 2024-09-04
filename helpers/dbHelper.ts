import { Client } from "pg";

export class DbHelper {
  private client: Client;

  constructor() {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error("DATABASE_URL environment variable is not defined");
    }

    this.client = new Client({ connectionString });
  }

  async connect() {
    await this.client.connect();
    console.log("Database connected");
  }

  async disconnect() {
    await this.client.end();
  }

  async deleteUserByUsername(username: string) {
    await this.client.query(`DELETE FROM users WHERE username ='${username}'`);
  }
}
