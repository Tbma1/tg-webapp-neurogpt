document.addEventListener('DOMContentLoaded', function() {
    const chatWindow = document.getElementById('chat-window');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');

    // Инициализация Telegram WebApp
    Telegram.WebApp.ready();

    chatForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const messageText = chatInput.value.trim();
        if (messageText) {
            displayMessage(messageText, 'user-message');
            chatInput.value = '';

            // Здесь может быть логика для отправки сообщения боту и получения ответа
            // Предположим, что ответ бота - это эхо наше сообщение
            setTimeout(() => {
                displayMessage(messageText, 'bot-message');
            }, 500); // Имитация задержки ответа бота
        }
    });

    function displayMessage(text, className) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', className);
        messageElement.textContent = text;
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight; // Прокрутка к последнему сообщению
    }
});
