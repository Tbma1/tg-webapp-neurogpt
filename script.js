function sendMessage() {
    var userInput = document.getElementById("user-input");
    var chatBox = document.getElementById("chat-box");
    var userText = userInput.value.trim();

    if (userText !== "") {
        // Показываем сообщение пользователя в чате
        var userMessage = document.createElement("div");
        userMessage.textContent = "Вы: " + userText;
        chatBox.appendChild(userMessage);

        // Здесь вы можете добавить интеграцию с ChatGPT или любой другой логикой

        userInput.value = ""; // Очищаем поле ввода
    }
}
