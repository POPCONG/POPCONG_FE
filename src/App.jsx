import { Routes, Route, useLocation } from "react-router-dom";
import Main from "./pages/Main";
import Map from "./pages/Map";
import BottomNav from "./components/BottomNav";
import TopNav from "./components/TopNav";
import ChatPage from "./pages/chatPage/ChatPage";
import ChatRoomPage from "./pages/chatPage/ChatRoomPage";
import ChatRoomBuyPage from "./pages/chatPage/ChatRoomBuyPage";
import ChatRoomFinalPage from "./pages/chatPage/ChatRoomFinalPage";
function App() {
  const location = useLocation();
  // 바텀nav바를 숨길 경로들
  const hideBottomNavPaths = ["/login", "/chat/room/buy", "/chat/room/final"];
  // 탑nav바를 숨길 경로들
  const hideTopNavPaths = ["/login", "/chat/room/final"];

  // 현재 경로가 배열 안의 문자열과 일치하면 nav 숨김
  const shouldHideBottomNav = hideBottomNavPaths.some(
    (path) => location.pathname.startsWith(path) // 부분 일치 가능
  );
  const shouldHideTopNav = hideTopNavPaths.some(
    (path) => location.pathname.startsWith(path) // 부분 일치 가능
  );
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/map" element={<Map />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/chat/room/:id" element={<ChatRoomPage />} />
        <Route path="/chat/room/buy/:id" element={<ChatRoomBuyPage />} />
        <Route path="/chat/room/final" element={<ChatRoomFinalPage />} />
      </Routes>
      {!shouldHideBottomNav && <BottomNav />}
      {!shouldHideTopNav && <TopNav />}
    </>
  );
}
export default App;
