# 🏠 DesiStay - Your Go-To Home

DesiStay is a full-stack, responsive web application inspired by Airbnb, designed to help users find and list unique accommodations. It is built using the **MERN stack** (Mongoose, Express, Node.js) and features advanced searching, categorization, and secure user management.

---

## ✨ Key Features

* **User Authentication:** Secure user sign-up, login, and logout implemented using **Passport.js** with a Local Strategy.
* **Listing Management (CRUD):** Users can create, view, update, and delete their own accommodation listings.
    * **Authorization:** Middleware ensures only the listing owner can modify or delete a listing (`isOwner` middleware).
* **Dynamic Search & Filtering:**
    * **Search:** Full-text search across titles, descriptions, locations, and countries via the navbar.
    * **Categories:** Category-based filtering with a visually highlighted active filter.
* **Reviews:** Authenticated users can submit ratings and comments on any listing.
    * **Authorization:** Reviews can only be deleted by the original author (`isAuthor` middleware).
* **Mapping & Geocoding:** Integration with **MapTiler** to convert listing addresses into coordinates for geographical data storage.
* **Flash Messaging:** Contextual success and error feedback is displayed for critical user actions, including login/logout and failed searches.
* **Data Validation:** Server-side validation of listing and review schemas is enforced using **Joi**.

---

## 🛠️ Technologies

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Backend** | **Node.js, Express.js** | Runtime environment and web framework |
| **Database** | **MongoDB, Mongoose** | NoSQL database and ODM for schema definition |
| **Authentication** | **Passport.js (Local Strategy)** | User authentication and session management |
| **Mapping** | **MapTiler** | Geocoding service for location data |
| **Validation** | **Joi** | Server-side data schema validation |
| **Utilities** | **Express-Session, connect-flash, Multer, dotenv** | Session handling, flash messages, file uploads, and environment configuration |
| **Frontend** | **EJS, EJS-Mate, Bootstrap** | Templating engine, layout helpers, and responsive CSS framework |

---

## 🚀 Setup and Installation

### Prerequisites

* Node.js (LTS recommended)
* MongoDB (installed locally or a cloud URI)

### Steps

1.  **Clone the Repository**

    ```bash
    git clone [https://github.com/Mrunali178/Wanderlust-air-bnb-clone-.git]
    cd DesiStay-Your-Go-To-Home
    ```

2.  **Install Dependencies**

    ```bash
    npm install
    ```

3.  **Configure Environment Variables**

    Create a file named **`.env`** in the root directory. This file is essential for authentication, mapping, and database connection.

   
4.  **Start the Server**

    ```bash
    node app.js
    ```

The application will be running on port `8080`. 