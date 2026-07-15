import { Routes, Route } from "react-router-dom";

import Home from "./home";
import History from "./History";
import Pricing from "./pricing";
import Signup from "./Signup";
import Login from "./Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
