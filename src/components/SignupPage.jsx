import React from "react";
import { useState } from "react";

export const SignupPage = () => {
  const [inputValue, setinputValue] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    number: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setinputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <div>
      <h1>SignUp Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your name"
          name="name"
          onChange={handleChange}
          value={inputValue.name}
        />
        <input
          type="email"
          placeholder="enter your eamil"
          name="email"
          onChange={handleChange}
          value={inputValue.email}
        />
        <input
          type="password"
          placeholder="enter password"
          name="password"
          onChange={handleChange}
          value={inputValue.password}
        />
        <input
          type="gender"
          placeholder="enter your gender"
          name="gender"
          onChange={handleChange}
          value={inputValue.gender}
        />
        <input
          type="number"
          placeholder="enter your number"
          name="number"
          onChange={handleChange}
          value={inputValue.number}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
