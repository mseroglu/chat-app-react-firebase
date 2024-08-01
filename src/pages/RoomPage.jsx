
const RoomPage = ({ setIsOut, setRoom }) => {

   const logout = () => {
      setIsOut(false)
      //Local den refresh_tokeni siliyoruz
      localStorage.removeItem("TOKEN")
   }

   const handleSubmit = (e) => {
      e.preventDefault()

      const room = e.target[0].value.trim().toLowerCase()

      setRoom(room)

   }
   return (
      <form onSubmit={handleSubmit} className="room-page">
         <h1>Chat Odası</h1>
         <p>Hangi odaya gireceksiniz</p>
         <input type="text" required />

         <button type="submit">Odaya Gir</button>
         <button onClick={logout} type="button">Çıkış Yap</button>

      </form>
   );
};

export default RoomPage;