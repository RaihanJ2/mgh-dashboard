# 🚀 Sagara Technology Dashboard

> **Take Home Test Submission** - A comprehensive dashboard application built with modern React technologies

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Demo Credentials](#-demo-credentials)
- [Design Decisions](#-design-decisions)

---

## 🎯 Overview

A full-featured dashboard application for **Sagara Technology** - a leading Indonesian software development company. This project demonstrates modern React development practices, clean architecture, and attention to detail in UI/UX design.

**Company Philosophy:** *Plan, build, grow digital products. Continuously delivering impact.*

---

## ✨ Key Features

### 📊 **Analytics Dashboard**
- **4 Summary Cards** - Real-time metrics for projects, progress, and completion rates
- **Interactive Charts** - Built with Recharts library:
  - 📊 Bar Chart: Projects distribution by division
  - 🥧 Pie Chart: Status breakdown with percentage labels
  - 📈 Line Chart: Project growth timeline
- **Responsive Design** - Optimized for desktop, tablet, and mobile

### 🚀 **Projects Management**
- **Smart Table** with advanced features:
  - 🔍 Real-time search (by name or client)
  - ⬆️⬇️ Multi-column sorting with visual indicators
  - 📄 Pagination (5 items per page)
  - 📊 Visual progress bars with color-coded status
  - 🎨 Color-coded status badges
- **Division Tracking** - Digital, Creative, Web3, Smart Devices
- **Client Information** - Full project metadata

### 👥 **Team Management**
- **Employee Directory** with filtering and sorting
- **Division Statistics** - Summary cards for each division
- **Contact Information** - Email and role details
- **Hiring Timeline** - Join date tracking

### 🔐 **Authentication System**
- Protected routes with redirect logic
- Session persistence with localStorage
- Clean login/logout flow
- User information display in header

---

## 🛠 Technology Stack

### **Frontend Core**
- **React 19.2.0** - Latest React with new features and optimizations
- **TypeScript 5.9.3** - Type-safe development with strict mode
- **Vite 7.2.2** - Lightning-fast build tool with HMR

### **Styling & UI**
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **Lucide React** - Beautiful, consistent icon system (500+ icons)
- **Custom Design System** - Sagara brand colors (Black, Red, Grey)

### **Data Visualization**
- **Recharts 3.4.1** - Composable charting library
- Responsive containers for all screen sizes
- Custom color schemes matching brand identity

### **Routing & Navigation**
- **React Router DOM 7.9.6** - Client-side routing
- Protected route implementation
- Persistent navigation state

### **Development Tools**
- **ESLint** - Code quality and consistency
- **TypeScript ESLint** - TypeScript-specific linting rules
- **Vite Plugin React** - Fast refresh and JSX transformation

---

## 📁 Project Structure

```
sagara-dashboard/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Dashboard.tsx    # Main analytics dashboard
│   │   ├── Header.tsx       # Top navigation bar
│   │   ├── Sidebar.tsx      # Left navigation menu
│   │   ├── SummaryCard.tsx  # Metric display cards
│   │   ├── ProjectTable.tsx # Projects data table
│   │   └── EmployeeTable.tsx# Team members table
│   │
│   ├── page/                # Route-level pages
│   │   ├── Login.tsx        # Authentication page
│   │   ├── Projects.tsx     # Projects management page
│   │   └── Team.tsx         # Team directory page
│   │
│   ├── data/                # Static data files
│   │   ├── projects.ts      # Project records (8 projects)
│   │   └── employees.ts     # Employee records (6 members)
│   │
│   ├── utils/               # Utility functions
│   │   └── auth.ts          # Authentication logic
│   │
│   ├── type.d.ts            # TypeScript type definitions
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles & variables
│
├── public/                  # Static assets
│   └── main_logo/           # Sagara Technology logos
│
├── package.json             # Dependencies & scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite build configuration
└── README.md                # This file
```

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js **>= 18.0.0** (recommended: v20+)
- npm **>= 8.0.0** or yarn **>= 1.22.0**

### **Installation**

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sagara-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### **Build for Production**
```bash
npm run build
npm run preview
```

### **Linting**
```bash
npm run lint
```

---

## 🔑 Demo Credentials

```
Email: admin@example.com
Password: admin123
```

> **Note:** These credentials are displayed on the login page for easy testing.

---

## 💡 Design Decisions

### **1. Color Scheme - Sagara Brand Identity**
- **Primary Black** (`#0f172a`) - Professional, modern base
- **Accent Red** (`#e11d48`) - Action items, active states
- **Neutral Greys** (`#64748b`, `#f1f5f9`) - Content hierarchy

### **2. Component Architecture**
- **Separation of Concerns** - Pages vs. Components
- **Reusable Tables** - Shared sorting, filtering, pagination logic
- **Type Safety** - Strict TypeScript interfaces for all data

### **3. User Experience**
- **Instant Feedback** - Hover states, loading indicators
- **Visual Hierarchy** - Clear information architecture
- **Accessibility** - Semantic HTML, proper contrast ratios
- **Responsive Design** - Mobile-first approach

### **4. Data Management**
- **Static Data Files** - Easy to extend with real API
- **Type-Safe Models** - Interfaces for Project, Employee, User
- **LocalStorage Auth** - Simple session management

### **5. Performance Optimizations**
- **Vite for HMR** - Instant development feedback
- **Code Splitting** - Route-based lazy loading ready
- **Optimized Re-renders** - Proper React patterns

---

## 🎨 Sagara Technology Divisions

This dashboard manages projects across four key divisions:

| Division | Focus Area | Services |
|----------|-----------|----------|
| **Digital** | Core Development | Web Technology, Mobile Apps, AR/VR |
| **Creative** | Design & Marketing | UX/UI Design, Branding, Digital Marketing |
| **Smart Devices** | Hardware & IoT | IoT Solutions, UAV Systems, RFID |
| **Web3** | Blockchain | Smart Contracts, NFT, DeFi Solutions |

---

## 📝 Code Quality

- ✅ **TypeScript Strict Mode** - Maximum type safety
- ✅ **ESLint Configuration** - Consistent code style
- ✅ **Component Modularity** - Single responsibility principle
- ✅ **Clean File Structure** - Logical organization
- ✅ **Semantic HTML** - Accessibility best practices

---

## 🔮 Future Enhancements

- [ ] Backend API integration (REST/GraphQL)
- [ ] Real-time updates with WebSocket
- [ ] Advanced analytics with filters
- [ ] Export functionality (CSV, PDF)
- [ ] Dark mode toggle
- [ ] Internationalization (i18n)
- [ ] User role management
- [ ] Project timeline visualization
- [ ] Team performance metrics

---

## 📄 License

© 2025 PT. Sagara Asia Teknologi - South Jakarta and Bandung, Indonesia

---

## 👤 Submission Information

**Take Home Test Project**  
Developed with attention to detail, modern best practices, and user-centric design.

**Tech Highlights:**
- Latest React 19 features
- Type-safe TypeScript implementation
- Modern Tailwind CSS 4 utilities
- Professional UI/UX design
- Clean, maintainable codebase

---
