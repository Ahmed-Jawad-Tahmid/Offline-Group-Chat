
  

# Offline Group Chat

  

This is a LAN-based real-time messaging app that lets users connect and communicate *without the internet*. Whether you're at a hackathon, in a remote location, or just building your own local comms tool — this project has you covered.

  

Built using:

- Python (WebSocket server)

- Vanilla JS + HTML/CSS frontend

- Works in any modern browser over a shared Wi-Fi or hotspot

  

---

  

## Why I Built This

  
  

In July-August 2023, Bangladesh experienced a country-wide internet blackout during mass protests. People could still see Wi-Fi networks and mobile towers on their phones — but had no access to the internet. The connectivity was there, but the internet wasn't.

  

That moment inspired this project.

  

This is a browser-based real-time messenger designed for such environments — lightweight, device-agnostic, and functional over nothing more than a shared local network.

  
  
  

---

  

## Features

  

- Real-time chat over LAN

- Works on laptops, phones, and tablets

- Fully offline — no internet required

- Usernames and message timestamps

- Left-right alignment for sent/received messages

- Responsive design (mobile + desktop)

- Lightweight dark-mode UI

  

---

  

## How It Works

  

1. One device preferably a pc runs the Python WebSocket server (the “host”).

2. In the same device, go to the directory where the repo is and serve the frontend using:

```bash

python  -m  http.server  8080

```

- This launches a simple HTTP server on port 8080

- And serves all files in the current directory

- You can then access the chat app by simply opening the index.html in your default browser

- Or by going to :

```bash

http://localhost:8080

```

3. Then share the local IP of the host device with others on the same network.

4. Other users open the chat frontend in a browser and connect using that IP:

```bash

http://<host-ip>:8080/index.html

```

  

5. Messages are instantly sent and received across devices — entirely offline.

  

---

  

## Prerequisites

  

- Python 3.10 or higher

- Install the `websockets` library:

  

```bash

pip  install  websockets

```
---

---


## Screenshots

> Real-time offline chat happening across devices — no internet involved.

### Users Joining from PC

![PC Chat Demo 1](https://github.com/Ahmed-Jawad-Tahmid/Offline-Group-Chat/blob/main/screenshots/Screenshot%201.png?raw=true)  
*Two different users chatting on separate browser sessions*

![PC Chat Demo 2](https://github.com/Ahmed-Jawad-Tahmid/Offline-Group-Chat/blob/main/screenshots/Screenshot%202.png?raw=true)

---

### Mobile Chat (iPhone)

<img src="https://github.com/Ahmed-Jawad-Tahmid/Offline-Group-Chat/blob/main/screenshots/screenshot%203.jpg?raw=true" alt="Mobile Chat Screenshot" width="350"/>

*Chatting from Safari on iPhone connected to the same LAN — messages are fully synced in real time.*

---
