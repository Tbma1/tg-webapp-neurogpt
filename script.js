function sendMessage() {
    var userInput = document.getElementById("user-input");
    var chatBox = document.getElementById("chat-box");
    var userText = userInput.value.trim();

    if (userText !== "") {
        // Добавление сообщения пользователя в чат
        var userMessage = document.createElement("div");
        userMessage.classList.add("message", "user-message");
        userMessage.textContent = userText;
        chatBox.appendChild(userMessage);

        // Здесь вы можете добавить логику для получения ответа от ChatGPT или другой логики

        userInput.value = ""; // Очистка поля ввода
        chatBox.scrollTop = chatBox.scrollHeight; // Прокрутка к последнему сообщению
    }
}
