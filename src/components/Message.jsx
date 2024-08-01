import { auth } from "../firebase/config";

const Message = ({ data }) => {

   if (auth.currentUser?.uid === data.author.id)
      return <p className="msg-user">{data.text}</p>

   return (
      <div className="msg-other">
         <span className="user-img">
            <img src={data.author.photo} alt="img" />
         </span>
         <span className="user-info">
            <div >{data.author.name}</div>
            <p className="msg-text">{data.text}</p>
         </span>
      </div>
   );
};

export default Message;