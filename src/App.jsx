import { Routes, Route, useLocation } from "react-router-dom";
import Main from "./pages/Main";
import Map from "./pages/Map";
import BottomNav from "./components/BottomNav";
import TopNav from "./components/TopNav";
function App() {
  const location = useLocation();
  //로그인 화면에는 nav바 숨겨야됨!
  const hideNavPaths = ["/login"];
  const shouldHideNav = hideNavPaths.includes(location.state?.pathname);
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/map" element={<Map />} />
      </Routes>
      {!shouldHideNav && <BottomNav />}
      {!shouldHideNav && <TopNav />}
    </>
  );
}
export default App;
