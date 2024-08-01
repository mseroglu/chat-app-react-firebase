import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/config";

const LoginPage = ({ setIsAuth }) => {


   const handleClick = () => {
      signInWithPopup(auth, provider)
         .then((res) => {
            // kullanıcı yetkisi
            setIsAuth(true)

            // kullanıcı tokeni localStorage ye kaydet
            localStorage.setItem("TOKEN", res.user.refreshToken)
         })
         .catch((err) => console.log(err))
   }

   return (
      <div className="container">
         <div className="login">
            <h1>Chat Odası</h1>
            <p>Devam Etmek için Giriş Yapınız</p>
            <button onClick={handleClick}>
               <img src="g-logo.png" alt="logo" />
               <span>Google ile Gir</span>
            </button>
         </div>
      </div>
   );
};

export default LoginPage;