INSERT INTO commands (command_body, user_id)
VALUES ($1, 1);

SELECT * FROM commands
WHERE user_id = 1;