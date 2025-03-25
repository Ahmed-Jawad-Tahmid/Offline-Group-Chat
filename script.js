const serverIP = prompt("Enter server IP (e.g., 192.168.0.101):", "127.0.0.1");
const socket = new WebSocket(`ws://${serverIP}:54321`);

const messagesDiv = document.getElementById("messages");
const input = document.getElementById("input");
const sendButton = document.getElementById("send");

socket.onopen = () => {
  appendMessage("✅ Connected to LocalBridge server.");
};

socket.onmessage = (event) => {
  appendMessage(event.data);
};

socket.onclose = () => {
  appendMessage("❌ Disconnected from server.");
};

function appendMessage(message) {
  const p = document.createElement("p");
  p.textContent = message;
  messagesDiv.appendChild(p);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function sendMessage() {
  const text = input.value.trim();
  if (text !== "") {
    socket.send(text);
    input.value = "";
  }
}

sendButton.onclick = sendMessage;
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});
