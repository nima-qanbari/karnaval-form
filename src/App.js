import "./App.css";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";

import ApiConnector from "./ApiConnector/ApiConnector";
import CheckLogin from "./components/CheckLogin.js/CheckLogin";
import CheckNotLogin from "./components/CheckLogin.js/CheckNotLogin";
import EditProfile from "./components/EditProfile/EditProfile";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={
            <CheckLogin>
              <ApiConnector />
            </CheckLogin>
          }
        />
        <Route
          path="/dashboard"
          element={
            <CheckNotLogin>
              <Dashboard />
            </CheckNotLogin>
          }
        />
        <Route path="/dashboard/profile" element={<EditProfile />} />
      </Routes>
    </div>
  );
}

export default App;
