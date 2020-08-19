// import React from "react";
// import "./index.css";
// import axios from "axios";

// function SignUp(){

//     handleSubmit(event){
//         console.log("sign-up-form, username: ");
//         console.log(this.state.username);
//         // REQUEST TO SERVER GOES HERE
//         axios.post("/", {
//             username: this.state.username,
//             password: this.state.password
//         })
//         .then(res => {
//             console.log(res)
//             if(res.data){
//                 console.log("Sign up is successful")
//                 this.setState({
//                     redirectTo: "/login"
//                 })
//             } else {
//                 console.log("Error with sign up")
//             }
//         }).catch(error => {
//             console.log("Sign up server error: ")
//             console.log(error);
//         })
//     }

//     return (
//     <div>
//         <input
//         type="text"
//         name="username"
//         value={this.state.username}
//         onChange={this.state.handleChange}
//         />

//         <input type="password" placeholder="Password"></input>
//         <button>Login</button>
//     </div>
//     )
// }

// export default SignUp;
export { default } from "./SignUp.js";
