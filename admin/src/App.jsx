import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/auth/LoginPage";
import NotFound from "./pages/notfound/NotFound";
import './App.css'
import AdminLayout from "./pages/admin/layout/AdminLayout";
import UserList from "./pages/admin/pages/UserList";
import TieUser from "./pages/admin/pages/TieUser";
import AddUser from "./pages/admin/pages/AddUser";
import Withdrawels from "./pages/admin/pages/Withdrawels";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin" element={<UserList />} />
            <Route path="/admin/add-user" element={<AddUser />} />
            <Route path="/admin/user-list" element={<UserList />} />
            <Route path="/admin/user-tie/:id" element={<TieUser />} />
            <Route path="/admin/withdrawels/:id" element={<Withdrawels />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
