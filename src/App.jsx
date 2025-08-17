import { Routes, Route, useLocation } from "react-router-dom";
import Main from "./pages/Main";
import BottomNav from "./components/BottomNav";
import OnboardingPage from "./pages/OnBoarding";
import Home from "./pages/Home";
import Signup from "./pages/SignUp";

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
        <Route path="/main" element={<Main />} />
      </Routes>
      {!shouldHideNav && <BottomNav />}
    </>
  );
}

export default App;
