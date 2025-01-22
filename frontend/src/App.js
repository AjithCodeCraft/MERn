import { Route, Routes } from "react-router-dom";
import Header from "./pages/header/header";
// import dashboard from "./pages/auth/login/dashboard/dashboard";
import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/auth/login/login";
import Signup from "./pages/auth/signup/signup";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Wrap Dashboard in JSX syntax */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </>
  );
}

export default App;
