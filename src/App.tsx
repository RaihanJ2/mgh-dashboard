import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { isLoggedIn } from "./utils/auth";
import Login from "./page/Login";
import Dashboard from "./components/Dashboard";
import Projects from "./page/Projects";
import Team from "./page/Team";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

// Layout component that includes Header and Sidebar for all authenticated pages
const ProtectedLayout = () => {
  if (!isLoggedIn()) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-row flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-slate-50 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

function App() {
  const loggedIn = isLoggedIn();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={loggedIn ? "/dashboard" : "/login"} />}
        />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
