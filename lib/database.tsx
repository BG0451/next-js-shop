import pool from "../utils/postgres";

const fetchDataFromDB = async (query: string) => {
  try {
    const client = await pool.connect();
    console.log("Conncected to the database!");

    const result = await client.query(query);
    const data = result.rows;
    //console.log("Feched data:", data);
    client.release();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetchDataFromDB;
