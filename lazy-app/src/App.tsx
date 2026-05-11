import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './App.css'

// Lazy loaded components for routes
const LoginPage = lazy(() => import("./pages/Login"));
const HomePage = lazy(() => import("./pages/Home"));
const InfiniteScroll = lazy(() => import("./pages/InfiniteScroll"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/large-content" element={<InfiniteScroll />} />
          <Route path="/" element={<Navigate to="/login
          " />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
