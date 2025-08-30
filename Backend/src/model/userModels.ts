import pool from "../db";

export const getAllUsersService = async () => {
  const result = await pool.query("SELECT * FROM userss");
  return result.rows;
};

export const getUserByIdService = async (id: number) => {
  const result = await pool.query("SELECT * FROM userss WHERE id = $1", [id]);
  return result.rows[0];
};

export const updateUserService = async ( firstname: string, lastname: string, mobilenumber: number,
  email: string | number, id: number) => {
  const result = await pool.query(
    "UPDATE userss SET firstname = $1, lastname = $2, mobilenumber = $3, email = $4 WHERE id = $5 RETURNING *",
    [firstname,lastname, mobilenumber, email, id]
  );
  return result.rows[0];
};

export const createUserService = async (
  firstname: string,
  lastname: string,
  mobilenumber: number,
  email: string | number,
  password: string | number // kept, even if not used
) => {
  console.log('INSERTing with columns: firstname, lastname, mobilenumber, email');
  const result = await pool.query(
    "INSERT INTO userss (firstname, lastname, mobilenumber, email) VALUES ($1, $2,$3,$4) RETURNING *",
    [firstname,lastname, mobilenumber, email]
  );
  return result.rows[0];
};

export const deleteUserService = async (id: number) => {
  // $1 placeholder
  const result = await pool.query(
    "DELETE FROM userss WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};

