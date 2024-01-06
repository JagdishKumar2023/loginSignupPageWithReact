import React from "react";
import { useState } from "react";

export const LoginPage = () => {
  const [loginValue, setloginValue] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setloginValue({
      ...loginValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your name"
          name="name"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="enter password"
          name="password"
          onChange={handleChange}
        />
        <button>submit</button>
      </form>
    </div>
  );
};
