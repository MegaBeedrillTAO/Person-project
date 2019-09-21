INSERT INTO commands (command_body, user_id)
VALUES ($1, $2);

SELECT * FROM commands
WHERE user_id = $2;