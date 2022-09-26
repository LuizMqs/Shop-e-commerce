const deleteQuery = `
  UPDATE client
  SET deleted = true
  WHERE id = $1;
`;
const updateQuery = `
  UPDATE client
  SET cpf = $1, name = $2, address = $3, email = $4, password = $5, user_name = $6, updated_at = now()
  WHERE id = $7;
`;
const insertQuery = `
  INSERT INTO public.client (cpf, name, address, email, password, user_name)
  VALUES ($1, $2, $3, $4, $5, $6);
`;
const listQuery = `
  SELECT * FROM client ORDER by name ASC
`;

module.exports = { deleteQuery, updateQuery, insertQuery, listQuery }