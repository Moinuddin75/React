import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import Registration from "./Registration";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<UserList />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App
