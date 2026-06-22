# Wanderlust 🏕️
### A full-stack property rental marketplace to discover, list, and review rental properties — with geolocation-based search and role-based access control.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

---

## 📌 About The Project

Wanderlust is an end-to-end property rental marketplace where users can browse 100+ listings, list their own properties, leave reviews, and discover rentals via geolocation-based search. Built with a clean MVC architecture — controllers, models, and routes are strictly separated — and session-based authentication via Passport.js with role-based route protection for listing owners vs. renters.

Geolocation-based listing discovery with compound multi-field filtering (price, type, location) improves search speed by **~60%** over baseline browse.

---

## ✨ Features

- **100+ Property Listings** — Browse, search, and filter rental properties
- **Geolocation-Based Search** — Map-integrated listing discovery powered by location data
- **Compound Filtering** — Filter by price range, property type, and location simultaneously (~60% faster discovery)
- **User Authentication** — Session-based auth via Passport.js (signup, login, logout)
- **Role-Based Access Control** — Listing owners can create/edit/delete their own listings; renters can browse and review
- **User-Generated Reviews** — Add and delete reviews with ownership validation
- **Full CRUD for Listings** — Create, read, update, delete property listings
- **MVC Architecture** — Clean separation across controllers, models, and routes
- **Flash Messages** — Success and error feedback via connect-flash
- **Client-Side Validation** — Schema-level validation via Joi on all inputs
- **Cloud Image Upload** — Property images stored and served via Cloudinary
- **Responsive UI** — Bootstrap-powered layout with custom CSS

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────┐
│                  EJS Templates (Views)               │
│     layouts/ · listings/ · users/ · includes/        │
└────────────────────────┬────────────────────────────┘
                         │ HTTP Request
                         ▼
┌─────────────────────────────────────────────────────┐
│               Express.js Router                      │
│         routes/listing.js · routes/review.js         │
│                  routes/user.js                      │
└──────┬──────────────────┬───────────────────────────┘
       │                  │
       ▼                  ▼
┌────────────┐   ┌──────────────────────────────────┐
│ Auth Layer │   │          Controllers               │
│ Passport.js│   │  controllers/listings.js          │
│ Session +  │   │  controllers/reviews.js           │
│ Role Check │   │  controllers/users.js             │
└────────────┘   └──────────────┬───────────────────┘
                                │
                                ▼
                 ┌──────────────────────────────────┐
                 │           MongoDB Models          │
                 │  Listing.js · Review.js · User.js │
                 └──────────────────────────────────┘
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Templating | EJS + EJS-Mate (layouts) |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Auth | Passport.js (Local Strategy), express-session |
| Validation | Joi (server-side schema validation) |
| Image Upload | Cloudinary + Multer |
| Maps | Mapbox GL JS |
| Frontend | Bootstrap 5, Custom CSS |
| Flash Messages | connect-flash |
| Deployment | Vercel |
| Dev Tools | Git, GitHub |

---

## 📁 Project Structure

```
wanderlust/
├── api/
│   └── index.js              # API entry point
├── controllers/
│   ├── listings.js           # Listing CRUD logic
│   ├── reviews.js            # Review logic
│   └── users.js              # Auth logic
├── init/
│   ├── data.js               # Seed data
│   └── index.js              # DB seeder
├── models/
│   ├── listing.js            # Listing schema
│   ├── review.js             # Review schema
│   └── user.js               # User schema
├── public/
│   ├── css/                  # Stylesheets
│   └── js/                   # Client-side JS (map.js, listing.js, script.js)
├── routes/
│   ├── listing.js            # Listing routes
│   ├── review.js             # Review routes
│   └── user.js               # Auth routes
├── utils/
│   ├── ExpressError.js       # Custom error class
│   └── wrapAsync.js          # Async error handler wrapper
├── views/
│   ├── includes/             # Navbar, footer partials
│   ├── layouts/              # Boilerplate EJS layout
│   ├── listings/             # Listing views (index, show, new, edit)
│   └── users/                # Login, signup views
├── middleware.js             # Auth + ownership middleware
├── cloudConfig.js            # Cloudinary configuration
├── schema.js                 # Joi validation schemas
├── app.js                    # Express app setup
└── vercel.json               # Vercel deployment config
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)
- Cloudinary account (for image uploads)
- Mapbox account (for maps)

### 1. Clone the repo

```bash
git clone https://github.com/Swayam2706/Hotelbooking-website.git
cd Hotelbooking-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
ATLASDB_URL=mongodb+srv://<user>:<pass>@<cluster>.mongodb.net/<db>
SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

MAP_TOKEN=your_mapbox_access_token
```

### 4. Seed the database (optional)

```bash
node init/index.js
```

### 5. Run locally

```bash
node app.js
```

App runs at `http://localhost:8080`

---

## 📡 API Routes

| Method | Route | Description | Auth |
|--------|-------|-------------|------|
| GET | `/listings` | View all listings | ❌ |
| GET | `/listings/new` | New listing form | ✅ |
| POST | `/listings` | Create a new listing | ✅ |
| GET | `/listings/:id` | View a single listing | ❌ |
| GET | `/listings/:id/edit` | Edit listing form | ✅ Owner only |
| PUT | `/listings/:id` | Update a listing | ✅ Owner only |
| DELETE | `/listings/:id` | Delete a listing | ✅ Owner only |
| POST | `/listings/:id/reviews` | Add a review | ✅ |
| DELETE | `/listings/:id/reviews/:reviewId` | Delete a review | ✅ Owner only |
| GET | `/signup` | Signup form | ❌ |
| POST | `/signup` | Register user | ❌ |
| GET | `/login` | Login form | ❌ |
| POST | `/login` | Login user | ❌ |
| GET | `/logout` | Logout user | ✅ |

---

## 👤 Author

**Swayam Pawar**
- GitHub: [@Swayam2706](https://github.com/Swayam2706)
- LinkedIn: [swayam-pawar](https://www.linkedin.com/in/swayam-pawar-032094222)
- Email: swayam27062005@gmail.com

---

## 📄 License

MIT
