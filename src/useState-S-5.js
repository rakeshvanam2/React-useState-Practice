import React, { useState } from "react";

const Data = () => {
  const [firstName, setFisrtName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //  const changeFirstName =(e)=>{
  //     setFisrtName(e.target.value)
  //  }
  //  const changeEmail =(e)=>{
  //     setEmail(e.target.value)
  //  }
  //  const changePassword =(e)=>{
  //     setPassword(e.target.value)
  //  }

  const handleInputChange = (e, name) => {
    console.log(e.target.value, name);
    if (name === "firstName") {
      setFisrtName(e.target.value);
    } else if (name === "email") {
      setEmail(e.target.value);
    } else if (name === "password") {
      setPassword(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let useObj = {
      firstName: firstName,
      email: email,
      password: password,
    };
    console.log(useObj);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="enter your firstname"
          value={firstName}
          onChange={(e) => handleInputChange(e, "firstName")}
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="enter your email"
          value={email}
          onChange={(e) => handleInputChange(e, "email")}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="enter your password"
          value={password}
          onChange={(e) => handleInputChange(e, "password")}
        />
      </div>
      <div>
        <button type="submit">submit</button>
      </div>
    </form>
  );
};
export default Data;
