
# 📄 Google Docs Lite

A simplified **real-time collaborative text editor** inspired by Google Docs. This project demonstrates real-time text synchronization using **Socket.IO**, persistent storage with **MongoDB**, and a **React** frontend.

> ⚠️ Note: This is a learning / academic project built to understand real-time systems, not a full Google Docs replacement.

---

## 🚀 Features

* 🔄 **Real-time collaboration** – text updates sync instantly across multiple browsers
* 👤 **Multi-user support** – multiple clients can connect simultaneously
* 💾 **MongoDB persistence** – document content stored in database
* ↩️ **Undo / Redo support**
* 🌐 **Socket.IO based communication**
* 🎨 Clean and minimal UI (Google Docs–like)

---

## 🛠️ Tech Stack

### Frontend

* React
* Socket.IO Client
* HTML / CSS / JavaScript

### Backend

* Node.js
* Express.js
* Socket.IO
* MongoDB (Mongoose)

---

## 📁 Project Structure

```text
google-docs-lite/
│
├── client/
│   ├── public/
│   └── src/
│       ├── App.js
│       ├── App.css
│       ├── index.js
│       └── ...
│
├── server/
│   ├── models/
│   │   └── Document.js
│   ├── index.js
│   ├── package.json
│   └── ...
│
├── .gitignore
├── README.md
└── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/google-docs-lite.git
cd google-docs-lite
```

---

### 2️⃣ Backend setup

```bash
cd server
npm install
```

Update MongoDB connection string inside `server/index.js`.

Run the server:

```bash
node index.js
```

Server will start on:

```
http://localhost:5000
```

---

### 3️⃣ Frontend setup

Open a new terminal:

```bash
cd client
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## 🧪 How to Test

1. Open the app in **two different browsers** or devices
2. Start typing in one window
3. See real-time updates in the other window
4. Test undo / redo buttons
5. Refresh browser → content persists from MongoDB

---

## 🎯 Learning Outcomes

* Understanding real-time communication using WebSockets
* Managing concurrent users
* Handling shared state
* Backend–frontend synchronization
* MongoDB document persistence

---

## 📌 Limitations

* No authentication system
* Basic conflict handling
* UI kept simple for clarity

---

## 🔮 Future Improvements

* User authentication
* Cursor tracking per user
* Colored highlights per collaborator
* Version history
* Rich-text formatting

---

## 🤝 Contribution

This project is for learning purposes. Feel free to fork and experiment.

---

## 🧑‍💻 Author

**Rethikaa Ramesh**
CSE Student | MERN Stack Learner

---

⭐ If you found this project useful, give it a star on GitHub!



