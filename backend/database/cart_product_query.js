const insertQuery = `
    INSERT INTO public.cart_product (cart_id, product_id) 
    VALUES ($1, $2);
`;

const deleteQuery = `
    UPDATE cart_product
    SET deleted = true
    WHERE deleted = false AND id = $1;
`;

const countQuery = `
    SELECT COUNT(id) FROM cart_product 
    WHERE cart_product.cart_id = $1 AND cart_product.deleted = false
`;

const productIdQuery = `
    SELECT
        cart_product.product_id,
        product.name,
        product.price
    FROM cart_product
    LEFT JOIN product ON product.id = cart_product.product_id
    WHERE cart_product.cart_id = $1 AND cart_product.deleted = false
`;

const CartProductIdQuery = `
    SELECT
        id
    FROM cart_product
    WHERE cart_id = $1 AND deleted = false 
`;

const CardProductsPriceQuery = `
    SELECT 
        SUM(product.price)
    FROM cart_product
    LEFT JOIN product ON product.id = cart_product.product_id
    WHERE cart_product.cart_id = $1 AND cart_product.deleted = false
`;



module.exports = { insertQuery, deleteQuery, countQuery, productIdQuery, CartProductIdQuery, CardProductsPriceQuery }