INSERT INTO users
(
    email,
    first,
    last,
    address,
    password
)
values
($1, $2, $3, $4, $5)
returning *