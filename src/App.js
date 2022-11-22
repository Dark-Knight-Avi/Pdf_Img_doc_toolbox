import React from "react";
import { Navbar, Sidebar, Footer } from "./components/exports";
import { Features, Home, Login, Signup } from "./pages/exports";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/features" element={<Features />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
