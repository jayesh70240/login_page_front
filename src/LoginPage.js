import React,{useCallback, useState} from "react";
import  './LoginPage.css';
import validator from 'validator'

function LoginPage(){
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [id, setId] = useState('');
    const [idError, setIdError] = useState(false);
    const idRegex = /^[0-9a-zA-Z]+$/;
    const regExp =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
   
    const passwordHandle = (e) => {
          let password = e.target.value;
       if( password === ""){
        setPasswordError("please Enter password")
       }else if(regExp.test(password)){
        setPasswordError("password is valid")
       }else if(!regExp.test(password)){
        setPasswordError("password is not valid")
       }else{
        setPasswordError("")
       }
    }
    const handleId =(e) =>{
        let  id = e.target.value;
        if(!id.match(idRegex)){
            setIdError(true)
        }else{
            setIdError(false)
        }
    }
   function loginhandle(e){
    e.preventDefault();

   }
     return(
        <div>
            <form  onSubmit={loginhandle}className="login-page">
                  <label style={{fontWeight:'600'}}>Please Login Here</label>
                  <br/><br/>
                  <label> Enter User Id : </label>
                  <input type="text"  placeholder="Enter user id" onChange={handleId}/>
                  <br/>
                  {idError? <span style={{color:'red'}}>only contain alphabets and  numbers</span> : ""}
                  <br/>
                  <label> Enter Password : </label>
                  <input type="password"  placeholder="Enter password"  />
                  <br/>
                 
                  <br/>
                  <button type="submit">login</button>
            </form>
        </div>
     )
}


export default  LoginPage;