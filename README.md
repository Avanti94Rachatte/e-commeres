# E-Commeres

An e-commerce frontend built with React, Vite, Tailwind CSS and a custom Cart & Checkout flow.  
Live demo: https://e-commeres-myshop.vercel.app/  

---

## 📂 Project Structure

src/
 ├─ components/          # UI components (e.g. DeliveriForm, CheckoutSummary, etc.)
 ├─ context/             # CartContext for managing cart state
 ├─ pages/               # Page components like SingleProduct, Cart, Home, etc.
 ├─ services/            # for API calls (e.g. fetching product data)
 ├─ assets/              # images, icons, etc.
 └─ main.jsx / App.jsx    # entry & routing

---
## 🧰 Features

- Browse product list and view single product details
- Select quantity before adding to cart
- Toggle between **Add to Cart** / **Go to Cart** in the single product page
- Cart page: view items, modify quantities, remove items
- Delivery Information form with validation
- Bill & Payment method selection (dummy) in checkout flow
- Final Checkout summary screen showing delivery info, payment method and total order
- Fully responsive layout (mobile / tablet / desktop)

---

## ⚙ Tech Stack

| Part | Technology |
|---|---|
| Frontend | React + Vite |
| Styling | Tailwind CSS |
| State | React Context (CartContext) |
| Data source | Dummy JSON (for product info) / Axios |
| Icons / UI | React Icons, Toasts via `react-toastify` |

---
## ✅ Usage Flow

 1. Go to a product from product listing → you can choose quantity → Add to Cart
 2. In Cart page you can increase / decrease quantity for each item or remove item
 3. Click “Proceed to Checkout” → fill Delivery Info, choose Payment method → mock “Place Order”
 4. After “Place Order” alert, you are redirected to Products page and the Cart is cleared for fresh start

---


## 🛠 Getting Started

### Prerequisites

- Node.js installed
- npm (or yarn) available

### Install & Run Locally

```bash
git clone https://github.com/Avanti94Rachatte/e-commeres.git
cd e-commeres
npm install
npm run dev
