const verifyQuery = `
    SELECT id FROM shop_cart 
    WHERE shop_cart.user_id = $1 and shop_cart.status = 'ready';
`

const findCartProductQuery = `
    SELECT * FROM shop_cart
    WHERE deleted = false and shop_cart.user_id = $1 and status = 'ready';
`

const insertShopCartQuery = `
    INSERT INTO public.shop_cart (user_id, status)
    VALUES ($1, 'ready');
`

module.exports = { findCartProductQuery, verifyQuery, insertShopCartQuery }