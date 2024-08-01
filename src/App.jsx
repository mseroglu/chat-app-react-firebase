import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import RoomPage from "./pages/RoomPage";
import ChatPage from "./pages/ChatPage";

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("TOKEN"))
  const [room, setRoom] = useState(null)

  // kullanıcının  yetkisi yoksa
  if (!isAuth) return <LoginPage setIsAuth={setIsAuth} />

  // yetkisi varsa
  return (
    <div className="container">
      {!room
      // oda seçili değilse: oda seçme odası
        ? <RoomPage setIsOut={setIsAuth} setRoom={setRoom} />
        // oda seçili ise: chat odası
        : <ChatPage room={room} setRoom={setRoom} />
      }
    </div>
  );
};

export default App;