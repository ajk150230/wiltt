update users
set address = $2
where user_id = $1
returning address