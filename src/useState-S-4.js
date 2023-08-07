import React, { useState } from "react";

const Data = () => {
  const [showData, setShowData] = useState(false);

  const handleChange = () => {
    setShowData(!showData);
  };
  return (
    <div>
      <button onClick={handleChange}>{showData ?"hide":"show"}</button>
      {/* {showData && (
        <div className="content">
          Iam very fond of learning new Things, Iam self motivated,i want to be
          a strong pillor of any reputed orgination,thats all for me thanks you
          medam
        </div>
      )} */}
      {
        showData?(<div>Iam very fond of learning new Things, Iam self motivated,i want to be
        a strong pillor of any reputed orgination,thats all for me thanks you
        medam
        </div>
        ):(<h3>Data is Hidden</h3>) }
    </div>
  );
};
export default Data;
