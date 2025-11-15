export const isLoggedIn = () => {
  return localStorage.getItem("auth") === "true";
};

export const login = (email: string, password: string): boolean => {
  if (email === "admin@example.com" && password === "admin123") {
    localStorage.setItem("auth", "true");
    localStorage.setItem("user", "Admin");
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem("auth");
  localStorage.removeItem("user");
};
