import { Routes, Route, useLocation } from "react-router-dom";
import Main from "./pages/Main";
import BottomNav from "./components/BottomNav";
function App() {
  const location = useLocation();
  //로그인 화면에는 nav바 숨겨야됨!
  const hideNavPaths = ["/login"];
  const shouldHideNav = hideNavPaths.includes(location.state?.pathname);
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      {!shouldHideNav && <BottomNav />}
    </>
  );
}
export default App;
