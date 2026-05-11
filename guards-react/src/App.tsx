import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFountPage from "./components/NotFountPage";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Home from "./components/Home";

// import PrivateAuthGuard from "./utils/guards/privateAuth.guard";
import PrivateAuthGuard from "./utils/alternative-guards/privateAuth2.guard";
import PublicAuthGuard from "./utils/guards/publicAuth.guard";
// import PublicAuthGuard from "./utils/alternative-guards/publicAuth2.guard";

import "./App.css";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/login"
            element={
              <PublicAuthGuard>
                <Login />
              </PublicAuthGuard>
            }
          />
          <Route element={<PrivateAuthGuard />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFountPage />} />
          {/* element={<Navigate to="/new-path" />} */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
