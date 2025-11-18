# 🚗 GoTogether – Ride Booking Platform

A modern ride-sharing web application for **Riders**, **Drivers**, and **Admins** — built with **React + TypeScript**, **Redux**, **Leaflet**, and a beautifully animated UI.

---

## 🌍 Live Deployment

🔗 **Website:** https://go-together-ride.netlify.app/  
🔗 **GitHub Repo:** https://github.com/RajuM1997/ride-booking-client

---

## 📌 Project Overview

**GoTogether** is a seamless ride-booking platform designed for safer and faster transportation.  
Riders can instantly book rides, Drivers can accept requests, and Admins can monitor everything from a centralized dashboard.

The project is built with **modular architecture**, **reusable components**, and **TypeScript** for strong typing and future scalability.

---

## 🚀 Features

### 🧍 Rider Features

- Easy registration & login
- Book rides instantly
- Track ride booking progress
- View ride history
- Interactive map (React Leaflet)
- Smooth UI & skeleton loaders

### 🚗 Driver Features

- Register with valid details
- Accept / Reject ride requests
- Track rides in real-time
- Driver dashboard
- View earnings & ride stats

### 🛠️ Admin Features

- Manage riders & drivers
- Monitor all rides
- Admin dashboard
- System-wide analytics

---

## 🎨 UI/UX Highlights

- Fully responsive design
- Light / Dark theme support
- Framer Motion animations
- Shadcn UI components
- Swiper carousel
- Clean modular component structure

---

## 📁 Folder Structure

````bash
src/
├── assets/
├── components/
│   ├── homePage/
│   ├── layout/
│   └── modules/
│       ├── admin/
│       ├── rider/
│       ├── driver/
│       └── authentication/
├── config/
├── constants/
├── context/
├── hooks/
├── lib/
├── pages/
│   ├── admin/
│   ├── rider/
│   ├── driver/
│   └── authentication/
├── providers/
├── redux/
│   └── features/
│       ├── admin/
│       ├── rider/
│       ├── driver/
│       ├── auth/
│       └── user/
├── types/
└── utils/

## 🧰 Technology Stack

### **Frontend**

- React (TypeScript)
- React Router
- Shadcn UI
- Redux Toolkit
- Swiper.js
- React-Leaflet
- Zod
- React Hook Form
- Framer Motion
- Axios

### **Styling**

- Tailwind CSS
- Custom theming
- Light/Dark mode

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/RajuM1997/ride-booking-client
cd ride-booking-client


2️⃣ Install dependencies
npm install

3️⃣ Create .env file
VITE_API_URL=your_backend_api_url

4️⃣ Run the development server
npm run dev

5️⃣ Build for production
npm run build

🗒️ Additional Notes

API must be running for booking features.

Map tiles load from Leaflet CDN.

Redux store is modular and easy to scale.

Theme preference saved in localStorage.

Codebase follows enterprise-level structure.
```
````
