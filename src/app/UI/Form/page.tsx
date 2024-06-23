'use client'
import React from "react";
const page = () => {
  //   firstname: "Mike",
  // lastname: "",
  // age: ,
  // status: "",

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(Object.fromEntries(data.entries()));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="fname" />
        </label>
        <label>
          Last Name:
          <input type="text" name="lname" />
        </label>
        <label htmlFor="age">
          Age:
          <input type="number" name="age" />
        </label>
        <input type="submit" value="Submit" />
      </form>

      {/* normal form */}
    </div>
  );
};

export default page;
