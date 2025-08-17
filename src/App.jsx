import { Routes, Route, useLocation } from "react-router-dom";
import TopNav from "./components/TopNav";
import BottomNav from "./components/BottomNav";
import Main from "./pages/Main";
import OnboardingPage from "./pages/OnBoarding";
import Home from "./pages/Home";
import Signup from "./pages/SignUp";
import Map from "./pages/Map";

function App() {
  const location = useLocation();

  // nav바 숨기기
  const hideNavPaths = ["/", "/signup"];
  const shouldHideNav = hideNavPaths.includes(location.pathname); // 수정했습니다

  return (
    <>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/main" element={<Main />} />
      </Routes>

      {!shouldHideNav && <BottomNav />}
      {!shouldHideNav && <TopNav />}
    </>
  );
}

export default App;
