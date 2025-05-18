# Furniture Store (React + Node.js + PostgreSQL)

A complete full-stack web application built with **React (Vite)** on the frontend, **Node.js + Express** on the backend, and **PostgreSQL** as the database.  
Furniture Store is an online shop where users can browse products, read blog posts, register/login, manage their cart, and (as admins) manage content.

---

## Features

### User Authentication
- JWT-based signup/login  
- Password hashing with bcrypt  
- Protected routes for users and admins  

### Shop
- Browse products with pagination, filters, and search  
- View detailed product pages  
- Add products to the cart  
- Manage cart (change quantity, remove items)  

### Blog
- Admins can create, update, and delete blog posts (CRUD)  
- Users can view blog posts  
- Dynamic post detail pages  

### Admin Panel
- Full CRUD for products and blog posts  
- Admin-only access to management features  

---

## Tech Stack

### Frontend
- React (Vite)  
- React Router  
- Axios  
- Context API (Auth, Cart)  
- CSS (responsive layout)  

### Backend
- Node.js  
- Express.js  
- PostgreSQL  
- JWT (jsonwebtoken)  
- bcrypt  
- cors  
- dotenv  

### Deployment
- **Vercel** (Frontend)  
- **Render** (Backend + PostgreSQL)  
