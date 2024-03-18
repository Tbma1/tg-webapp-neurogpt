document.getElementById('chat-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартную отправку формы

    const input = document.getElementById('chat-input');
    const message = input.value.trim();

    if (message) {
        // Добавление сообщения пользователя в чат
        addMessageToChat('user', message);

        // Имитация ответа бота через 1 секунду
        setTimeout(() => {
            addMessageToChat('bot', 'Это автоматический ответ бота на ваше сообщение.');
        }, 1000);
    }

    input.value = ''; // Очищаем поле ввода после отправки
});

function addMessageToChat(sender, messageText) {
    const chatWindow = document.getElementById('chat-window');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', `${sender}-message`);

    const avatarElement = document.createElement('img');
    avatarElement.src = sender === 'user' ? 'path_to_user_avatar.jpg' : 'path_to_bot_avatar.jpg';
    avatarElement.alt = `${sender} Avatar`;
    avatarElement.classList.add('avatar');

    const contentElement = document.createElement('div');
    contentElement.classList.add('message-content');
    contentElement.textContent = messageText;

    messageElement.appendChild(avatarElement);
    messageElement.appendChild(contentElement);

    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Прокрутка чата к последнему сообщению
}
