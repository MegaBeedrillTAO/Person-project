INSERT INTO settings (name, background_color, container_color, chat_bubble_color, language, user_id)
values ($1, 'blue', 'black', 'white', 'English', $2)
RETURNING *;