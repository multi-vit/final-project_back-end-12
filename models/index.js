import query from "../db/index.js";

export async function getAll() {
  console.log(`getAll Model reached`);
  let res = await query(`SELECT * FROM produce`);
  return res.rows;
}
export async function getByItem(item) {
  let res = await query(
    `SELECT * FROM produce WHERE lower(name) LIKE lower($1) RETURNING *`,
    [item]
  );
  return res.rows;
}
