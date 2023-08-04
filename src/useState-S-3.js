import React, { useState } from "react";

const Data = () => {
  const intialArray = [
    {
      id: "1bcd",
      firstName: "emma",
      lastName: "watson",
      age: 27
    },
    {
      id: "2bds",
      firstName: "Rakesh",
      lastName: "vanam",
      age: 26
    },
    {
      id: "3bcd",
      firstName: "emma",
      lastName: "watson",
      age: 27
    },
    {
      id: "4bds",
      firstName: "Rakesh",
      lastName: "vanam",
      age: 26
    }
  ];
  const [data, setData] = useState(intialArray);
  const handleDelete = (cominigId) => {
    const filterData = data.filter((eachitem) => {
      return eachitem.id !== cominigId;
    });
    setData(filterData);
  };

  return (
    <div>
      <ul>
        {data.map((eachitem) => {
          const { id, firstName, lastName, age } = eachitem;
          return (
            <li key={id}>
              <div>
                firstName:<strong>{firstName}</strong>
              </div>
              <div>
                LastName:<strong>{lastName}</strong>
              </div>
              <div>
                age:<strong>{age}</strong>
              </div>
              <button onClick={() => handleDelete(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Data;
