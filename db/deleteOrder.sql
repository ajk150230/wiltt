delete from orders
where orders_id = $1
returning *