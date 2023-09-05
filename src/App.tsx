import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersPage from "./pages/Customers/users";
import Dashboard from "./pages/dashboard";
import LoginPages from "./pages/login";
import User from "./pages/Customers/users/user";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPages />} />
        <Route path="/Users" element={<Dashboard />} />
        <Route path="/UsersDetails" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
