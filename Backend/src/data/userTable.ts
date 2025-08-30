import pool from "../db";

const userTable = async()=> {
const queryText = `CREATE TABLE IF NOT EXISTS userss(
    id SERIAL PRIMARY KEY,
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  mobilenumber VARCHAR(15) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
    
    )`;

    try {
        pool.query(queryText)
        console.log("User table is created");

    }
        catch(error){
console.log ("Error creating users")
        }
    
};

export default userTable ;
