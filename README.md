# 🚀 Tech Portal — Technology Evolution & Learning Platform (Client)

A modern, responsive, and user-friendly technology learning platform built with **React, Vite, and Tailwind CSS**.  
This repository contains the complete frontend of **Tech Portal**, a centralized platform for technology news, learning pathways, and career guidance for students and IT professionals.

🔗 Live Website: https://tech-portal-30529.web.app  
🔗 Client Repository: https://github.com/ApornaRakshit/tech-portal-client  
🔗 Server Repository: https://github.com/ApornaRakshit/tech-portal-server  

---

## 📑 Table of Contents

- About the Frontend  
- Features  
- Tech Stack  
- Folder Structure  
- Environment Variables  
- Installation & Setup  
- Available Scripts  
- Deployment  
- API Integration Overview  
- Future Enhancements  
- License  
- Contact  

---

## 🔍 About the Frontend

The **Tech Portal Frontend** provides an intuitive and engaging interface for users to explore trending technologies, follow structured learning paths, and stay updated with the latest IT innovations.

---

## 🚀 Features

- Browse trending technology news & articles  
- Explore learning pathways (Beginner → Advanced)  
- Discover emerging technologies (AI, ML, Web, Cybersecurity, etc.)  
- Firebase authentication  
- Fast loading performance with Vite  
- Fully responsive design  

---

## 🛠 Tech Stack

- React.js  
- Vite  
- Tailwind CSS  
- Firebase Authentication  
- Axios  
- React Router DOM  

---

## 📂 Folder Structure

```
TECH-PORTAL-CLIENT/
├── .firebase/
├── dist/
├── node_modules/
├── public/
│   ├── data/
│   ├── tutorials/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   ├── contexts/
│   ├── firebase/
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── router/
│   ├── routes/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .env.local
├── .firebaserc
├── firebase.json
├── eslint.config.js
├── index.html
├── package.json
└── package-lock.json
```

## 🔐 Environment Variables

To run the Tech Portal frontend locally, several environment variables are required.  
These are used to configure the connection to Firebase Authentication and the backend API.

---

### Option 1: Create Your Own Firebase Project (Recommended)

1. Go to Firebase Console: https://firebase.google.com  
2. Create a new Firebase project  
3. Add a Web App to the project  
4. Enable **Email/Password Authentication**  
5. Copy the Firebase configuration keys  
6. Set your backend API URL (local or deployed)

---

### Option 2: Use Existing Environment (Optional)

If you want to use the live project environment for testing purposes, you can contact me on LinkedIn.

👉 LinkedIn: (Add your LinkedIn profile link here)

---

### Create `.env.local` File

After getting the required credentials, create a file named:


in the root directory and add the following:

```env
VITE_API_URL=your_backend_api_url
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

⚙ Installation & Setup
Follow these steps to run the project locally:

1️⃣ Clone the repository
bash
Copy code
git clone https://github.com/ApornaRakshit/tech-portal-client.git
2️⃣ Go to the project folder
bash
Copy code
cd tech-portal-client
3️⃣ Install dependencies
bash
Copy code
npm install
4️⃣ Start the development server
bash
Copy code
npm run dev


🌐 Deployment
Frontend deployed using Firebase Hosting
Backend deployed using Vercel

🔗 Live Website: https://tech-portal-30529.web.app

🔌 API Integration Overview
The frontend communicates with a RESTful backend API for:

User authentication

Technology articles & tutorials

Learning pathways

Categories and content filtering

Secure JWT authorization

All API requests are handled using Axios.

🔮 Future Enhancements
Personalized learning recommendations

AI-based career guidance

User dashboard & progress tracking

Bookmark and save articles

Learning roadmap visualization

📜 License
This project is developed for educational and learning purposes.

📬 Contact
Aporna Rakshit
Computer Science & Engineering Student
Full Stack Developer (MERN)

GitHub: https://github.com/ApornaRakshit
LinkedIn: https://www.linkedin.com/in/apornarakshit/

