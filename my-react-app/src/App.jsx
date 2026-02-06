import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import Registration from "./Registration";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      {/* <div> */}
        <Header />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>

      <Footer />
      {/* </div> */}
    </>
  )
}

export default App
