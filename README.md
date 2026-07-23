# Ministración Web App

A modern, mobile-first web application designed to manage, organize, and track ministering efforts (visits, care, and support for members).

For the complete development backlog, architecture diagrams, and design mockups, please refer to [PROJECT.md](PROJECT.md).

---

## 🛠️ Tech Stack

*   **Frontend (PWA & Web):** React (Vite) + TypeScript
*   **Styling & UI:** Tailwind CSS (Premium Design, Glassmorphism, Dark Mode Support)
*   **Backend:** Azure Functions (Node.js + TypeScript)
*   **Database:** Azure Cosmos DB (MongoDB API)
*   **Storage:** Azure Blob Storage
*   **Authentication:** JWT + Bcrypt
*   **Maps:** Leaflet.js + OpenStreetMap
*   **AI Assistant (Phase 2):** Google Gemini API

---

## 📂 Project Structure

```text
├── .agent/            # Agent configurations and workflows
├── frontend/          # React (Vite) Frontend Web App
├── diseños/           # Screen mockups (HTML and PNG)
├── openspec/          # System specifications (OpenSpec)
├── PROJECT.md         # Architecture, backlog, and design document
├── README.md          # Quickstart guide
└── .gitignore         # Git ignored files
```

---

## 🚀 Prerequisites

Make sure you have the following installed:
*   [Node.js](https://nodejs.org/) (v18 or higher)
*   [Azure Functions Core Tools](https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local) (for local backend development)
*   A code editor like [VS Code](https://code.visualstudio.com/)

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/dancarril2020-stack/Minister-app.git
cd Minister-app
```

### 2. Frontend Configuration
```bash
cd frontend
npm install
npm run dev
```

### 3. Backend Configuration (Azure Functions)
*(Steps to be detailed once the Azure Functions structure is initialized)*

---

## 🧪 Testing

The project uses **Vitest** and **React Testing Library** for unit and component testing.
```bash
cd frontend
npm run test
```
