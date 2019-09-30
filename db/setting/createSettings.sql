INSERT INTO settings (name, background_color, container_color, chat_bubble_color, language, user_id, zipcode, country)
values ($1, 'blue', 'black', 'white', 'en', $2, 75201, 'us')
RETURNING *;