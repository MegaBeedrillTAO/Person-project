UPDATE settings
SET 
name = $1,
background_color = $2,
container_color = $3,
chat_bubble_color = $4,
language = $5
where user_id = $6;

SELECT * FROM settings
where user_id = $6;