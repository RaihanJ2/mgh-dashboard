# Sagara Technology Dashboard

**Software Developer Indonesia** - Plan, build, grow digital products. Continuously delivering impact.

A comprehensive dashboard application for managing Sagara Technology's projects, team, and analytics.

## Features

### 📊 Analytics Dashboard

- **Summary Cards**: Total Projects, Active Projects, Completed Projects, Average Progress
- **Charts**:
  - Bar Chart: Projects by Division (Digital, Creative, Web3, Smart Devices)
  - Pie Chart: Project Status Distribution
  - Line Chart: Project Growth Over Time

### 🚀 Projects Management

- View all projects across divisions
- Track project progress and status
- Filter and search projects by name or client
- Sort by various criteria

### 👥 Team Management

- View team members across all divisions
- Division-based team statistics
- Employee information and roles

### 🔐 Authentication

- Secure login system
- Protected routes
- Session management

## Technology Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Navigation and routing
- **Recharts** - Data visualization
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── Dashboard.tsx    # Analytics dashboard
│   ├── Header.tsx       # Application header
│   ├── Sidebar.tsx      # Navigation sidebar
│   ├── SummaryCard.tsx  # Statistics cards
│   ├── ProjectTable.tsx # Projects data table
│   └── EmployeeTable.tsx # Team data table
├── page/            # Page components
│   ├── Login.tsx       # Login page
│   ├── Projects.tsx    # Projects page
│   └── Team.tsx        # Team page
├── data/            # Data files
│   ├── projects.ts     # Project data
│   └── employees.ts    # Employee data
├── utils/           # Utilities
│   └── auth.ts         # Authentication logic
└── type.d.ts        # TypeScript type definitions
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Sagara Technology Divisions

- **Digital Division**: Web Technology, Mobile Technology, Augmented Reality
- **Creative Division**: UX Design, UI Design, Digital Marketing
- **Smart Devices Division**: IoT, UAV, RFID
- **Web3 Services**: Smart Contracts, NFT, DeFi

## License

© 2025 PT. Sagara Asia Teknologi - South Jakarta and Bandung, Indonesia
