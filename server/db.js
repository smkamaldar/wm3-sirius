import { Pool } from "pg";
require("dotenv").config();
import { readFileSync } from "fs";
import path from "path";

const dbUrl = process.env.DATABASE_URL || "postgres://localhost:5432/sirius";
const sql = readFileSync(path.join(__dirname,"./schema.sql")).toString();

const pool = new Pool({
	connectionString: dbUrl,
	connectionTimeoutMillis: 5000,
	ssl: dbUrl.includes("localhost") ? false : { rejectUnauthorized: false },
});

export const connectDb = async () => {
	let client;
	try {
		client = await pool.connect();
		await client.query(sql);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
	console.log("Postgres connected to", client.database);
	client.release();
};

export const disconnectDb = () => pool.close();

export default { query: pool.query.bind(pool) };
