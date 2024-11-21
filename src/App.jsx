import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Foot from "./Components/Foot";
import Home from "./Pages/Home";
import Result from "./Pages/Result";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <BrowserRouter
        future={{
          v7_startTransition: true,
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Foot />
      </BrowserRouter>
    </>
  );
}

export default App;
