select b.first, b.last, b.address, a.price, a.orders_id from orders a
join users b
on a.user_id = b.user_id
where a.user_id = $1