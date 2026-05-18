import React, { useState } from 'react'

const Form
 = () => {
  const [firstName,setfirstName]=useState("");
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const changeFirstName=(e)=>{
    console.log(e.target.value);
    setfirstName(e.target.value);
  };
  const changeemail=(e)=>{
    console.log(e.target.value);
    setemail(e.target.value);
  };
  const changepassword=(e)=>{
    console.log(e.target.value);
    setpassword(e.target.value);
  };
  return (
    <center>
    <div>Form
        <form>
          <div className="form-content">
            <input type='text' name="firstname" id="firstnaame" value={firstName} onChange={changeFirstName} placeholder='enter your name'/></div> <br></br><br></br>
            <div className="form-content">
            <input type='email' name="email" id="email" value={email} onChange={changeemail} placeholder='enter your email'/></div><br></br><br></br>
            <div className="form-content">
            <input type="password" name="password" id="password" value={password} onChange={changepassword} placeholder='enter your password'/></div> 
           <br></br> <br></br>
           <div className="form-content">
           <button>Submit</button>
           </div>
        </form>
    </div>
    </center>
  )
}

export default Form
