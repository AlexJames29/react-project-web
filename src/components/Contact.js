// import React from 'react'
// import './ContactStyles.css'
// import { useState } from 'react';
// function Contact() {
//     const [state, setState] = useState({
//         email: "",
//         password: ""
//       });
    
//       const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setState((prevProps) => ({
//           ...prevProps,
//           [name]: value
//         }));
//       };
    
//       const handleSubmit = (event) => {
//         event.preventDefault();
        
//       };
    
//       return (
//         <div className="App">
//           <form onSubmit={handleSubmit}>
//             <div className="form-control">
//               <label>Email</label>
//               <input
//                 type="text"
//                 name="email"
//                 value={event.email}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-control">
//               <label>Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={event.password}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-control">
//               <label></label>
//               <button type="submit">Login</button>
//             </div>
//           </form>
//         </div>
//   )
// }

// export default Contact
