document.addEventListener("DOMContentLoaded", () => {
  const serverIP = prompt("Enter the server IP:", "127.0.0.1");
  const nickname = prompt("Enter your name:");
  const socket = new WebSocket(`ws://${serverIP}:8000`);

  const messagesDiv = document.getElementById("messages");
  const input = document.getElementById("input");
  const sendButton = document.getElementById("send");

  socket.onopen = () => {
    appendMessage("✅ Connected to the server.", "system");
  };

  socket.onmessage = (event) => {
    const isOwnMessage = event.data.startsWith(`${nickname}:`);
    appendMessage(event.data, isOwnMessage ? "self" : "other");
  };

  socket.onclose = () => {
    appendMessage("❌ Disconnected from server.", "system");
  };

  function appendMessage(message, type = "other") {
    const p = document.createElement("p");
    p.classList.add("message", type);

    const time = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });

    p.innerHTML = `<span class="timestamp">[${time}]</span> ${message}`;
    messagesDiv.appendChild(p);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }

  function sendMessage() {
    const text = input.value.trim();
    if (text !== "") {
      socket.send(`${nickname}: ${text}`);
      input.value = "";
    }
  }

  sendButton.onclick = sendMessage;

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMessage();
  });
});
