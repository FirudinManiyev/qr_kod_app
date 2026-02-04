import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
