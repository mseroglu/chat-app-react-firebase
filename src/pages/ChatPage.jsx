import { addDoc, collection, serverTimestamp, onSnapshot, query, orderBy, where } from "firebase/firestore";
import { db, auth } from "../firebase/config";
import { useEffect, useState } from "react";
import Message from "../components/Message";

const ChatPage = ({ room, setRoom }) => {
   const [messages, setMessages] = useState([])


   // mesaj yollama
   const sendMessage = async (e) => {
      e.preventDefault()

      // koleksiyonun referansını al
      const msgCol = collection(db, "messages")

      // koleksiyona döküman ekle
      await addDoc(msgCol, {
         text: e.target[0].value.trim(),
         room,
         author: {
            id: auth.currentUser.uid,
            name: auth.currentUser.displayName,
            photo: auth.currentUser.photoURL
         },
         created_at: serverTimestamp()
      })
         .then((res) => console.log("mesaj send ", res))
         .catch((err) => console.log("hata: ", err))

      // inputu temizle
      e.target.reset()


   }

   useEffect(() => {
      // abone olunacak koleksiyon referansı
      const msgCol = collection(db, "messages")

      const qu = query(msgCol, where("room", "==", room), orderBy("created_at"))

      // anlık olarak koleksiyondaki değişimi izle
      const unsub = onSnapshot(qu, (snapshot) => {
         // geçici dizi
         const tempMsg = []

         snapshot.docs.forEach(doc => {
            tempMsg.push(doc.data())
         })
         // mesajları state aktar
         setMessages(tempMsg)

         // odadan çıkınca onSnapshot isteklerinin devam etmemesi için bitirme
         return () => unsub()
      })

   }, [])


   return (
      <div className="chat-page">
         
         <header>
            <p>{auth.currentUser?.displayName}</p>
            <p>{room}</p>
            <button onClick={() => setRoom(null)}>Farklı Oda</button>
         </header>

         <main>
            
            {!messages.length 
            ? <div className="no_msg"><p >"Henüz hiç mesaj gönderilmedi. İlk mesajı siz gönderin"</p></div>
              : messages?.map((data, i) => <Message key={i} data={data} />)
            }
         </main>

         <form onSubmit={sendMessage}>
            <input type="text" placeholder="mesaj.." required />
            <button>Gönder</button>
         </form>
      </div>
   );
};

export default ChatPage;