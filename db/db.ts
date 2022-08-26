import { Pool } from "pg";

const devConfig = {
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE,
};


const prodConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
};

const pool = new Pool(
   process.env.NODE_ENV === "production" ? prodConfig : devConfig
);


export default pool;