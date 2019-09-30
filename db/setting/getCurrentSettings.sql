select u.username, s.name, s.background_color, s.container_color, s.chat_bubble_color, s.language, s.zipcode, s.country
from users u
join settings s on u.user_id = s.user_id
where u.user_id = $1;