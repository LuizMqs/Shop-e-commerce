const deleteQuery = `
    UPDATE admin
    SET deleted = true
    WHERE id = $1;
`;
const updateQuery = `
    UPDATE admin 
    SET name = $1, updated_at = now()
    WHERE id = $2;
`;
const insertQuery = `
    INSERT INTO public.client (cpf, name, address, email, password, user_name)
    VALUES ($1, $2, $3, $4, $5, $6);
`;
const listQuery = `
    SELECT * FROM admin ORDER by id ASC
`;

module.exports = { deleteQuery, updateQuery, insertQuery, listQuery }