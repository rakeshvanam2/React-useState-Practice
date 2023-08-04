import React, { useState } from "react";

const State = () => {
  const intialObj = {
    firstName: "emma",
    lastName: "watson",
    age: 27
  };
  const [data, setData] = useState(intialObj);
  const changeFirstName = () => {
    setData({
      ...data,
      firstName: "Rakesh"
    });
  };
  const changeLastName = () => {
    setData({
      ...data,
      lastName: "Vanam"
    });
  };
  return (
    <div>
      <h1> My First Name is :{data.firstName}</h1>
      <button onClick={changeFirstName}>Change Firstname</button>
      <h1> my Last Name is:{data.lastName}</h1>
      <button onClick={changeLastName}>Change Lastname</button>
      <h1> Age:{data.age}</h1>
    </div>
  );
};
export default State;
