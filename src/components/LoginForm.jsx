// import { useState } from "react";
// import axios from 'axios';


// const LoginForm = ({ProjectID})=>{

//     const [username , setUsername] = useState('');
//     const [password , setPassword] = useState('');
//     const [error , setError] = useState('');    
//     const handleSubmit= async (e)=>{
//         e.preventDefault();
//         const authObject = { 'ProjectID': ProjectID , 'User-Name': username , 'User-Secret' : password }
//         console.log(ProjectID, username , password)
//             try {
//                 await axios.get('https://api.chatengine.io/chats', {headers : authObject });

//                 localStorage.setItem('username',username);
//                 localStorage.setItem('password',password);
//                 window.location.reload();
//                 setError('');

//             } catch (error) {
//                 setError('Oops, incorrect credentials.');
//               }
//             };

//     return (
//         <div className="wrapper">
//             <div className="form">
//                 <h1 className="title">Chat Application</h1>
                
//                 <form onSubmit={handleSubmit}>
//                     <input type="text" value={username} onChange= {(e)=> setUsername(e.target.value)} className="input" placeholder="Username" required />
//                     <input type="password" value={password} onChange= {(e)=> setPassword(e.target.value)} className="input" placeholder="Password" required />
//                 <div align="center">
//                     <button type="submit" className="button">
//                     <span >Start Chatting</span>    
//                     </button>    
//                 </div>
//                 <h2 className="error">{error}</h2>
//                 </form>
//             </div>
//         </div>
//     );
// }
// export default LoginForm;

import { useState } from 'react';
import axios from 'axios';

//const projectID = '4a922e54-fa7b-4c7d-8632-7e41f01e5095';

const LoginForm = ({ProjectID}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("........"+ProjectID)
    const authObject = { 'Project-ID': ProjectID, 'User-Name': username, 'User-Secret': password };

try{  console.log(authObject);
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });
  
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
  }catch(error){
    setError('Oops wrong credentials')
  }
  }


  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default LoginForm;