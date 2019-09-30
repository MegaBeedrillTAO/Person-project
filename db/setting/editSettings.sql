UPDATE settings
SET 
name = $1,
background_color = $2,
container_color = $3,
chat_bubble_color = $4,
language = $5,
zipcode = $6,
country = $7
where user_id = $8;

SELECT * FROM settings
where user_id = $8;