const deleteQuery = `
    UPDATE product
    SET deleted = true
    WHERE deleted = false and id = $1;
`;
const updateQuery = `
    UPDATE product
    SET category = $1, price = $2, brand = $3, password = $4, updated_at = now()
    WHERE deleted = false and id = $5;
`;
const insertQuery = `
    INSERT INTO public.product (name, category, price, brand, created_by) 
    VALUES ($1, $2, $3, $4, $5);
`;
const listQuery = `
    SELECT product.id, 
    product.name,
    product.price, 
    product.created_at, 
    product.updated_at,
    categories.name as category,
    brands.name as brand,
    admin.name as created_by
    FROM product 
    LEFT JOIN admin ON product.created_by = admin.id
    LEFT JOIN categories ON product.category = categories.id
    LEFT JOIN brands ON product.brand = brands.id
    WHERE product.deleted = false
    ORDER by product.price`;

const listShopProductsQuery = `
    SELECT product.id, 
    product.price, 
    product.created_at, 
    product.updated_at,
    categories.name as category,
    brands.name as brand,
    admin.name as created_by
    FROM product 
    LEFT JOIN admin ON product.created_by = admin.id
    LEFT JOIN categories ON product.category = categories.id
    LEFT JOIN brands ON product.brand = brands.id
    WHERE product.deleted = false and id = $1
    ORDER by price;
`;

const idProductQuery = `
    SELECT product.id FROM product
    WHERE product.name = $1
`

module.exports = { deleteQuery, updateQuery, insertQuery, listQuery, idProductQuery, listShopProductsQuery }