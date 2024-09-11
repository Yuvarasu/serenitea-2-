document.querySelector('.book-btn').addEventListener('click', () => {
    alert('Appointment booked!');
});

document.querySelector('.toggle-btn').addEventListener('click', () => {
    const chatArea = document.querySelector('.chat-area');
    chatArea.classList.toggle('open');
    const buttonText = chatArea.classList.contains('open') ? 'Close' : 'Open';
    document.querySelector('.toggle-btn').textContent = buttonText;
});

document.querySelector('.send-btn').addEventListener('click', () => {
    const messageInput = document.querySelector('.message-input');
    const message = messageInput.value.trim();
    if (message !== '') {
        const chatMessages = document.querySelector('.chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        messageInput.value = '';
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const openChatBtn = document.getElementById("openChat");
    const closeChatBtn = document.getElementById("closeChat");
    const chatBot = document.querySelector(".chat-bot");

    openChatBtn.addEventListener("click", function() {
        chatBot.style.display = "block";
    });

    closeChatBtn.addEventListener("click", function() {
        chatBot.style.display = "none";
    });
});
