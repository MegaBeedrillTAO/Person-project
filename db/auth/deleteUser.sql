DELETE FROM users 
where user_id = $1;

DELETE FROM commands
where user_id = $1;

DELETE FROM settings
where user_id = $1;