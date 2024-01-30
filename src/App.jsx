import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Comonents/Login";
import Customer from "./Comonents/Customer";
import AddCustomer from "./Comonents/AddCustomer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/add" element={<AddCustomer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
